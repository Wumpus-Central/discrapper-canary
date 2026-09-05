r.d(s, { Authentication: () => c });
var a = r(252422),
    u = r(773362),
    e = r(501447),
    i = r(643793),
    o = r(17970),
    n = r(363015),
    d = r(755703),
    l = ({ config: t, authHint: s, manager: r, onFinish: e, onError: n }) => {
        let [l, c] = (0, u.u)(() => r ?? (0, d.O)({ config: t, authHint: s }), { manageLifecycle: !r });
        return ((0, u.c)({
            status: l.status,
            onFinish: e,
            onError: n,
            error: "error" === l.status ? l.error : void 0,
            moduleErrorCode: "error" === l.status ? l.moduleErrorCode : void 0,
        }),
        "idle" === l.status || "loading" === l.status)
            ? null
            : "tutorial" === l.status
              ? (0, a.v)(i.t, { manager: c })
              : "permissions" === l.status
                ? (0, a.v)(o.i, { manager: c, permissionStatus: l.permissionStatus })
                : "capture" === l.status
                  ? (0, a.v)(i.n, { manager: c, state: l })
                  : ((0, u.s)(l), null);
    },
    c = ({ config: t, manager: s, onFinish: r, onError: u }) =>
        (0, a.v)(e.t, {
            children: t ? (0, a.v)(l, { config: t, authHint: t.authHint, manager: s, onFinish: r, onError: u }) : null,
        });
(0, n.t)(c, "incode-authentication");
