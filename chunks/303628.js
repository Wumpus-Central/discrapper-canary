var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(91192),
    d = r(536895),
    f = r(442837),
    _ = r(570140),
    h = r(166459),
    p = r(911969),
    m = r(607070),
    g = r(209613),
    E = r(998698),
    v = r(540059),
    I = r(661824),
    T = r(703558),
    b = r(117530),
    y = r(459273),
    S = r(444282),
    A = r(898463),
    N = r(981631),
    C = r(995987),
    R = r(763971);
let O = [];
function D(e) {
    let { channelId: n, type: r } = e,
        i = (0, f.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        a = (0, g.Z)('attachments', d.hy.HORIZONTAL),
        l = (0, f.e7)([b.Z], () => b.Z.getUploads(n, r.drafts.type)),
        {
            isApplicationCommand: D,
            commandOptions: L,
            commandOptionStates: x
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
        w = o.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == L
                        ? void 0
                        : L.filter((e) => {
                              var n;
                              return e.type === p.jw.ATTACHMENT && (null == x ? void 0 : null === (n = x[e.name]) || void 0 === n ? void 0 : n.hasValue);
                          })) && void 0 !== e
                ? e
                : [];
        }, [L, x]),
        [P, M] = o.useState([]);
    o.useEffect(() => {
        let e = () => {
            h.Z.clearAll(n, r.drafts.type);
        };
        return _.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => _.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e);
    }, [n, r]);
    let k = o.useCallback(() => {
        a.focusFirstVisibleItem();
    }, [a]);
    (0, y.yp)({
        event: N.CkL.FOCUS_ATTACHMENT_AREA,
        handler: k
    });
    let U = {
            isApplicationCommand: D,
            previousUploadOptions: P,
            uploadOptions: w
        },
        B = o.useRef(U);
    o.useEffect(() => {
        B.current = U;
    }),
        o.useEffect(() => {
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
        : (0, s.jsxs)(o.Fragment, {
              children: [
                  (0, s.jsx)(c.bG, {
                      navigator: a,
                      children: (0, s.jsx)(c.SJ, {
                          children: (e) => {
                              let { ref: a, ...o } = e;
                              return (0, s.jsx)('ul', {
                                  ref: a,
                                  ...o,
                                  className: u()(C.channelAttachmentArea, R.scrollbarGhost),
                                  children: D
                                      ? w.map((e) =>
                                            (0, s.jsx)(
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
                                            (0, s.jsx)(
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
                  r.drafts.type === T.d.FirstThreadMessage || G ? null : (0, s.jsx)(I.Z, {})
              ]
          });
}
function L(e) {
    let { channelId: n, type: r, canAttachFiles: i } = e;
    return i
        ? (0, s.jsx)(D, {
              channelId: n,
              type: r
          })
        : null;
}
n.Z = o.memo(L);
