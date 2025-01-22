var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(91192),
    d = r(536895),
    f = r(442837),
    p = r(570140),
    h = r(166459),
    _ = r(911969),
    m = r(607070),
    g = r(209613),
    E = r(998698),
    v = r(540059),
    y = r(661824),
    b = r(703558),
    I = r(117530),
    T = r(459273),
    S = r(444282),
    A = r(898463),
    C = r(981631),
    N = r(995987),
    R = r(763971);
let O = [];
function D(e) {
    let { channelId: n, type: r } = e,
        i = (0, f.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        a = (0, g.Z)('attachments', d.hy.HORIZONTAL),
        l = (0, f.e7)([I.Z], () => I.Z.getUploads(n, r.drafts.type)),
        {
            isApplicationCommand: D,
            commandOptions: x,
            commandOptionStates: L
        } = (0, f.cj)([E.Z], () => {
            let e = E.Z.getActiveCommand(n);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: O,
                    commandOptionStates: null
                };
            let r = E.Z.getOptionStates(n);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: r
            };
        }),
        w = s.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == x
                        ? void 0
                        : x.filter((e) => {
                              var n;
                              return e.type === _.jw.ATTACHMENT && (null == L ? void 0 : null === (n = L[e.name]) || void 0 === n ? void 0 : n.hasValue);
                          })) && void 0 !== e
                ? e
                : [];
        }, [x, L]),
        [P, M] = s.useState([]);
    s.useEffect(() => {
        let e = () => {
            h.Z.clearAll(n, r.drafts.type);
        };
        return p.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => p.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e);
    }, [n, r]);
    let k = s.useCallback(() => {
        a.focusFirstVisibleItem();
    }, [a]);
    (0, T.yp)({
        event: C.CkL.FOCUS_ATTACHMENT_AREA,
        handler: k
    });
    let U = {
            isApplicationCommand: D,
            previousUploadOptions: P,
            uploadOptions: w
        },
        B = s.useRef(U);
    s.useEffect(() => {
        B.current = U;
    }),
        s.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: a } = B.current;
            if (e) {
                let e = [];
                i.forEach((n) => {
                    !a.some((e) => n.name === e.name) && e.push(n);
                }),
                    e.forEach((e) => {
                        h.Z.remove(n, e.name, r.drafts.type);
                    }),
                    M(a);
            }
        }, [n, w.length, r]);
    let G = (0, v.Q3)('ChannelAttachmentArea');
    return (!D && 0 === l.length) || (D && 0 === w.length)
        ? null
        : (0, o.jsxs)(s.Fragment, {
              children: [
                  (0, o.jsx)(c.bG, {
                      navigator: a,
                      children: (0, o.jsx)(c.SJ, {
                          children: (e) => {
                              let { ref: a, ...s } = e;
                              return (0, o.jsx)('ul', {
                                  ref: a,
                                  ...s,
                                  className: u()(N.channelAttachmentArea, R.scrollbarGhost),
                                  children: D
                                      ? w.map((e) =>
                                            (0, o.jsx)(
                                                S.Z,
                                                {
                                                    channelId: n,
                                                    keyboardModeEnabled: i,
                                                    option: e
                                                },
                                                e.name
                                            )
                                        )
                                      : l.map((e) =>
                                            (0, o.jsx)(
                                                A.Z,
                                                {
                                                    channelId: n,
                                                    draftType: r.drafts.type,
                                                    upload: e,
                                                    keyboardModeEnabled: i,
                                                    clip: e.clip
                                                },
                                                e.id
                                            )
                                        )
                              });
                          }
                      })
                  }),
                  r.drafts.type === b.d.FirstThreadMessage || G ? null : (0, o.jsx)(y.Z, {})
              ]
          });
}
function x(e) {
    let { channelId: n, type: r, canAttachFiles: i } = e;
    return i
        ? (0, o.jsx)(D, {
              channelId: n,
              type: r
          })
        : null;
}
n.Z = s.memo(x);
