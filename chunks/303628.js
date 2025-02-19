n.d(t, { Z: () => M }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(536895),
    c = n(442837),
    u = n(570140),
    d = n(166459),
    f = n(911969),
    p = n(607070),
    _ = n(209613),
    h = n(998698),
    m = n(540059),
    g = n(661824),
    E = n(703558),
    v = n(117530),
    b = n(459273),
    y = n(444282),
    O = n(898463),
    S = n(981631),
    I = n(417730),
    T = n(28149);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let D = [];
function x(e) {
    let { channelId: t, type: n } = e,
        o = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        N = (0, _.Z)('attachments', l.hy.HORIZONTAL),
        C = (0, c.e7)([v.Z], () => v.Z.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: w,
            commandOptions: x,
            commandOptionStates: L
        } = (0, c.cj)([h.Z], () => {
            let e = h.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: D,
                    commandOptionStates: null
                };
            let n = h.Z.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            };
        }),
        M = i.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == x
                        ? void 0
                        : x.filter((e) => {
                              var t;
                              return e.type === f.jw.ATTACHMENT && (null == L ? void 0 : null === (t = L[e.name]) || void 0 === t ? void 0 : t.hasValue);
                          })) && void 0 !== e
                ? e
                : [];
        }, [x, L]),
        [k, j] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.Z.clearAll(t, n.drafts.type);
        };
        return u.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => u.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e);
    }, [t, n]);
    let U = i.useCallback(() => {
        N.focusFirstVisibleItem();
    }, [N]);
    (0, b.yp)({
        event: S.CkL.FOCUS_ATTACHMENT_AREA,
        handler: U
    });
    let G = {
            isApplicationCommand: w,
            previousUploadOptions: k,
            uploadOptions: M
        },
        B = i.useRef(G);
    i.useEffect(() => {
        B.current = G;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: r, uploadOptions: i } = B.current;
            if (e) {
                let e = [];
                r.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.Z.remove(t, e.name, n.drafts.type);
                    }),
                    j(i);
            }
        }, [t, M.length, n]);
    let Z = (0, m.Q3)('ChannelAttachmentArea');
    return (!w && 0 === C.length) || (w && 0 === M.length)
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(s.bG, {
                      navigator: N,
                      children: (0, r.jsx)(s.SJ, {
                          children: (e) => {
                              var { ref: i } = e,
                                  s = P(e, ['ref']);
                              return (0, r.jsx)(
                                  'ul',
                                  R(A({ ref: i }, s), {
                                      className: a()(I.channelAttachmentArea, T.scrollbarGhost),
                                      children: w
                                          ? M.map((e) =>
                                                (0, r.jsx)(
                                                    y.Z,
                                                    {
                                                        channelId: t,
                                                        keyboardModeEnabled: o,
                                                        option: e
                                                    },
                                                    e.name
                                                )
                                            )
                                          : C.map((e) =>
                                                (0, r.jsx)(
                                                    O.Z,
                                                    {
                                                        channelId: t,
                                                        draftType: n.drafts.type,
                                                        upload: e,
                                                        keyboardModeEnabled: o,
                                                        clip: e.clip
                                                    },
                                                    e.id
                                                )
                                            )
                                  })
                              );
                          }
                      })
                  }),
                  n.drafts.type === E.d.FirstThreadMessage || Z ? null : (0, r.jsx)(g.Z, {})
              ]
          });
}
function L(e) {
    let { channelId: t, type: n, canAttachFiles: i } = e;
    return i
        ? (0, r.jsx)(x, {
              channelId: t,
              type: n
          })
        : null;
}
let M = i.memo(L);
