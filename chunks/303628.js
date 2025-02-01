n.d(t, { Z: () => O }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(536895),
    u = n(442837),
    c = n(570140),
    d = n(166459),
    f = n(911969),
    _ = n(607070),
    p = n(209613),
    h = n(998698),
    m = n(540059),
    g = n(661824),
    E = n(703558),
    v = n(117530),
    y = n(459273),
    I = n(444282),
    T = n(898463),
    b = n(981631),
    S = n(995987),
    A = n(763971);
let N = [];
function C(e) {
    let { channelId: t, type: n } = e,
        a = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        C = (0, p.Z)('attachments', l.hy.HORIZONTAL),
        R = (0, u.e7)([v.Z], () => v.Z.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: O,
            commandOptions: D,
            commandOptionStates: x
        } = (0, u.cj)([h.Z], () => {
            let e = h.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: N,
                    commandOptionStates: null
                };
            let n = h.Z.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            };
        }),
        L = r.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == D
                        ? void 0
                        : D.filter((e) => {
                              var t;
                              return e.type === f.jw.ATTACHMENT && (null == x ? void 0 : null === (t = x[e.name]) || void 0 === t ? void 0 : t.hasValue);
                          })) && void 0 !== e
                ? e
                : [];
        }, [D, x]),
        [P, w] = r.useState([]);
    r.useEffect(() => {
        let e = () => {
            d.Z.clearAll(t, n.drafts.type);
        };
        return c.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => c.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e);
    }, [t, n]);
    let M = r.useCallback(() => {
        C.focusFirstVisibleItem();
    }, [C]);
    (0, y.yp)({
        event: b.CkL.FOCUS_ATTACHMENT_AREA,
        handler: M
    });
    let k = {
            isApplicationCommand: O,
            previousUploadOptions: P,
            uploadOptions: L
        },
        U = r.useRef(k);
    r.useEffect(() => {
        U.current = k;
    }),
        r.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: r } = U.current;
            if (e) {
                let e = [];
                i.forEach((t) => {
                    r.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.Z.remove(t, e.name, n.drafts.type);
                    }),
                    w(r);
            }
        }, [t, L.length, n]);
    let G = (0, m.Q3)('ChannelAttachmentArea');
    return (!O && 0 === R.length) || (O && 0 === L.length)
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  (0, i.jsx)(o.bG, {
                      navigator: C,
                      children: (0, i.jsx)(o.SJ, {
                          children: (e) => {
                              let { ref: r, ...o } = e;
                              return (0, i.jsx)('ul', {
                                  ref: r,
                                  ...o,
                                  className: s()(S.channelAttachmentArea, A.scrollbarGhost),
                                  children: O
                                      ? L.map((e) =>
                                            (0, i.jsx)(
                                                I.Z,
                                                {
                                                    channelId: t,
                                                    keyboardModeEnabled: a,
                                                    option: e
                                                },
                                                e.name
                                            )
                                        )
                                      : R.map((e) =>
                                            (0, i.jsx)(
                                                T.Z,
                                                {
                                                    channelId: t,
                                                    draftType: n.drafts.type,
                                                    upload: e,
                                                    keyboardModeEnabled: a,
                                                    clip: e.clip
                                                },
                                                e.id
                                            )
                                        )
                              });
                          }
                      })
                  }),
                  n.drafts.type === E.d.FirstThreadMessage || G ? null : (0, i.jsx)(g.Z, {})
              ]
          });
}
function R(e) {
    let { channelId: t, type: n, canAttachFiles: r } = e;
    return r
        ? (0, i.jsx)(C, {
              channelId: t,
              type: n
          })
        : null;
}
let O = r.memo(R);
