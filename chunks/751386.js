r.r(s);
var a = r(768611),
    e = r(200503),
    u = r(628926),
    i = r(360710),
    n = r(585387),
    o = r(918676),
    c = r(956175),
    d = ({ config: t, authHint: s, manager: r, onFinish: u, onError: o }) => {
        let [d, l] = (0, e.u)(() => r ?? (0, c.createAuthenticationManager)({ config: t, authHint: s }), {
            manageLifecycle: !r,
        });
        return ((0, e.c)({
            status: d.status,
            onFinish: u,
            onError: o,
            error: "error" === d.status ? d.error : void 0,
            moduleErrorCode: "error" === d.status ? d.moduleErrorCode : void 0,
        }),
        "idle" === d.status || "loading" === d.status)
            ? null
            : "tutorial" === d.status
              ? (0, a.v)(i.t, { manager: l })
              : "permissions" === d.status
                ? (0, a.v)(n.i, { manager: l, permissionStatus: d.permissionStatus })
                : "capture" === d.status
                  ? (0, a.v)(i.n, { manager: l, state: d })
                  : ((0, e.s)(d), null);
    },
    l = ({ config: t, manager: s, onFinish: r, onError: e }) =>
        (0, a.v)(u.t, {
            children: t ? (0, a.v)(d, { config: t, authHint: t.authHint, manager: s, onFinish: r, onError: e }) : null,
        });
((0, o.t)(l, "incode-authentication"), r.d(s, {}, { Authentication: l }));
