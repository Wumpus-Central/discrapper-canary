n.d(t, {
    A: () => x,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(741918),
    c = n(311907),
    u = n(73153),
    d = n(608299),
    f = n(155718),
    p = n(775602),
    _ = n(260762),
    h = n(861382),
    m = n(522602),
    g = n(234320),
    E = n(349688),
    b = n(839914),
    y = n(914905),
    O = n(652215),
    A = n(896189),
    v = n(829681);

function S(e, t, n) {
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

function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}

function T(e, t) {
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

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = [];

function P(e) {
    let { channelId: t, type: n, ignoreFile: a, smallAttachments: S = !1 } = e,
        T = (0, c.bG)([p.A], () => p.A.keyboardModeEnabled),
        R = (0, _.A)("attachments", l.Gl.HORIZONTAL),
        P = (0, c.bG)([m.A], () => m.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: D,
            commandOptions: x,
            commandOptionStates: L,
        } = (0, c.cf)([h.A], () => {
            let e = h.A.getActiveCommand(t);
            if (null == e)
                return {
                    isApplicationCommand: !1,
                    commandOptions: w,
                    commandOptionStates: null,
                };
            let n = h.A.getOptionStates(t);
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
                                  e.type === f.n4.ATTACHMENT &&
                                  (null == L || null == (t = L[e.name]) ? void 0 : t.hasValue)
                              );
                          }))
                ? e
                : [];
        }, [x, L]),
        [M, k] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.A.clearAll(t, n.drafts.type);
        };
        return (
            u.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => u.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let U = i.useCallback(() => {
        R.focusFirstVisibleItem();
    }, [R]);
    (0, g.Vo)({
        event: O.jej.FOCUS_ATTACHMENT_AREA,
        handler: U,
    });
    let G = {
            isApplicationCommand: D,
            previousUploadOptions: M,
            uploadOptions: j,
        },
        V = i.useRef(G);
    i.useEffect(() => {
        V.current = G;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: r, uploadOptions: i } = V.current;
            if (e) {
                let e = [];
                r.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    k(i);
            }
        }, [t, j.length, n]);
    let F = P.filter((e) => e.filename !== a);
    return (!D && 0 === F.length) || (D && 0 === j.length)
        ? null
        : (0, r.jsx)(o.hD, {
              navigator: R,
              children: (0, r.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: i } = e,
                          a = N(e, ["ref"]);
                      return (0, r.jsx)(
                          "ul",
                          C(
                              I(
                                  {
                                      ref: i,
                                  },
                                  a,
                              ),
                              {
                                  className: s()(A.I, v.KK),
                                  children: D
                                      ? j.map((e) =>
                                            (0, r.jsx)(
                                                b.A,
                                                {
                                                    channelId: t,
                                                    keyboardModeEnabled: T,
                                                    option: e,
                                                },
                                                e.name,
                                            ),
                                        )
                                      : F.map((e) =>
                                            (0, r.jsx)(
                                                y.A,
                                                {
                                                    channelId: t,
                                                    draftType: n.drafts.type,
                                                    upload: e,
                                                    keyboardModeEnabled: T,
                                                    clip: e.clip,
                                                    size: S ? E.L.SMALL : E.L.MEDIUM,
                                                },
                                                e.id,
                                            ),
                                        ),
                              },
                          ),
                      );
                  },
              }),
          });
}

function D(e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: a, smallAttachments: s = !1 } = e;
    return i
        ? (0, r.jsx)(P, {
              channelId: t,
              type: n,
              ignoreFile: a,
              smallAttachments: s,
          })
        : null;
}
let x = i.memo(D);
