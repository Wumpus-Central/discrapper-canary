n.d(t, { Z: () => x }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(536895),
    c = n(442837),
    u = n(570140),
    d = n(166459),
    f = n(911969),
    p = n(607070),
    _ = n(209613),
    m = n(998698),
    h = n(117530),
    g = n(459273),
    E = n(859235),
    b = n(444282),
    y = n(898463),
    O = n(981631),
    v = n(575817),
    S = n(164701);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
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
function A(e, t) {
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
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = [];
function w(e) {
    let { channelId: t, type: n, ignoreFile: a, smallAttachments: I = !1 } = e,
        C = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        P = (0, _.Z)("attachments", l.hy.HORIZONTAL),
        w = (0, c.e7)([h.Z], () => h.Z.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: D,
            commandOptions: x,
            commandOptionStates: L,
        } = (0, c.cj)([m.Z], () => {
            let e = m.Z.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: R,
                    commandOptionStates: null,
                };
            let n = m.Z.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n,
            };
        }),
        j = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == x
                        ? void 0
                        : x.filter((e) => {
                              var t;
                              return (
                                  e.type === f.jw.ATTACHMENT &&
                                  (null == L || null == (t = L[e.name]) ? void 0 : t.hasValue)
                              );
                          }))
                ? e
                : [];
        }, [x, L]),
        [M, k] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.Z.clearAll(t, n.drafts.type);
        };
        return (
            u.Z.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => u.Z.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let U = i.useCallback(() => {
        P.focusFirstVisibleItem();
    }, [P]);
    (0, g.yp)({
        event: O.CkL.FOCUS_ATTACHMENT_AREA,
        handler: U,
    });
    let G = {
            isApplicationCommand: D,
            previousUploadOptions: M,
            uploadOptions: j,
        },
        Z = i.useRef(G);
    i.useEffect(() => {
        Z.current = G;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: r, uploadOptions: i } = Z.current;
            if (e) {
                let e = [];
                r.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.Z.remove(t, e.name, n.drafts.type);
                    }),
                    k(i);
            }
        }, [t, j.length, n]);
    let F = w.filter((e) => e.filename !== a);
    return (!D && 0 === F.length) || (D && 0 === j.length)
        ? null
        : (0, r.jsx)(s.bG, {
              navigator: P,
              children: (0, r.jsx)(s.SJ, {
                  children: (e) => {
                      var { ref: i } = e,
                          a = N(e, ["ref"]);
                      return (0, r.jsx)(
                          "ul",
                          A(T({ ref: i }, a), {
                              className: o()(v.channelAttachmentArea, S.scrollbarGhost),
                              children: D
                                  ? j.map((e) =>
                                        (0, r.jsx)(
                                            b.Z,
                                            {
                                                channelId: t,
                                                keyboardModeEnabled: C,
                                                option: e,
                                            },
                                            e.name,
                                        ),
                                    )
                                  : F.map((e) =>
                                        (0, r.jsx)(
                                            y.Z,
                                            {
                                                channelId: t,
                                                draftType: n.drafts.type,
                                                upload: e,
                                                keyboardModeEnabled: C,
                                                clip: e.clip,
                                                size: I ? E.q.SMALL : E.q.MEDIUM,
                                            },
                                            e.id,
                                        ),
                                    ),
                          }),
                      );
                  },
              }),
          });
}
function D(e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: a, smallAttachments: o = !1 } = e;
    return i
        ? (0, r.jsx)(w, {
              channelId: t,
              type: n,
              ignoreFile: a,
              smallAttachments: o,
          })
        : null;
}
let x = i.memo(D);
