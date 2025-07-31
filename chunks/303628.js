(n.d(t, { Z: () => L }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(536895),
    c = n(442837),
    u = n(570140),
    d = n(166459),
    _ = n(911969),
    f = n(607070),
    p = n(209613),
    h = n(998698),
    m = n(117530),
    g = n(459273),
    E = n(859235),
    b = n(444282),
    y = n(898463),
    O = n(981631),
    v = n(650514),
    I = n(283574);
function T(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let P = [];
function w(e) {
    let { channelId: t, type: n, ignoreFile: a, smallAttachments: T = !1 } = e,
        A = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        R = (0, p.Z)('attachments', l.hy.HORIZONTAL),
        w = (0, c.e7)([m.Z], () => m.Z.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: D,
            commandOptions: L,
            commandOptionStates: x
        } = (0, c.cj)([h.Z], () => {
            let e = h.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: P,
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
            return null !=
                (e =
                    null == L
                        ? void 0
                        : L.filter((e) => {
                              var t;
                              return e.type === _.jw.ATTACHMENT && (null == x || null == (t = x[e.name]) ? void 0 : t.hasValue);
                          }))
                ? e
                : [];
        }, [L, x]),
        [k, j] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.Z.clearAll(t, n.drafts.type);
        };
        return (u.Z.subscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e), () => u.Z.unsubscribe('APPLICATION_COMMAND_SET_ACTIVE_COMMAND', e));
    }, [t, n]);
    let U = i.useCallback(() => {
        R.focusFirstVisibleItem();
    }, [R]);
    (0, g.yp)({
        event: O.CkL.FOCUS_ATTACHMENT_AREA,
        handler: U
    });
    let G = {
            isApplicationCommand: D,
            previousUploadOptions: k,
            uploadOptions: M
        },
        B = i.useRef(G);
    (i.useEffect(() => {
        B.current = G;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: r, uploadOptions: i } = B.current;
            if (e) {
                let e = [];
                (r.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.Z.remove(t, e.name, n.drafts.type);
                    }),
                    j(i));
            }
        }, [t, M.length, n]));
    let V = w.filter((e) => e.filename !== a);
    return (!D && 0 === V.length) || (D && 0 === M.length)
        ? null
        : (0, r.jsx)(s.bG, {
              navigator: R,
              children: (0, r.jsx)(s.SJ, {
                  children: (e) => {
                      var { ref: i } = e,
                          a = C(e, ['ref']);
                      return (0, r.jsx)(
                          'ul',
                          N(S({ ref: i }, a), {
                              className: o()(v.channelAttachmentArea, I.scrollbarGhost),
                              children: D
                                  ? M.map((e) =>
                                        (0, r.jsx)(
                                            b.Z,
                                            {
                                                channelId: t,
                                                keyboardModeEnabled: A,
                                                option: e
                                            },
                                            e.name
                                        )
                                    )
                                  : V.map((e) =>
                                        (0, r.jsx)(
                                            y.Z,
                                            {
                                                channelId: t,
                                                draftType: n.drafts.type,
                                                upload: e,
                                                keyboardModeEnabled: A,
                                                clip: e.clip,
                                                size: T ? E.q.SMALL : E.q.MEDIUM
                                            },
                                            e.id
                                        )
                                    )
                          })
                      );
                  }
              })
          });
}
function D(e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: a, smallAttachments: o = !1 } = e;
    return i
        ? (0, r.jsx)(w, {
              channelId: t,
              type: n,
              ignoreFile: a,
              smallAttachments: o
          })
        : null;
}
let L = i.memo(D);
