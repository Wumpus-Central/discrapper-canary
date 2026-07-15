d.d(t, { Selfie: () => h });
var i = d(287822),
    e = d(748922),
    c = d(898159),
    a = d(486234),
    s = d(858399),
    n = d(398297),
    Z = d(115242),
    b = d(296767),
    m = d(356479),
    o = !1,
    u = ({ config: l, manager: t, onFinish: c, onError: b }) => {
        (0, i._)(() => {
            o || ((o = !0), d.e("82983").then(d.bind(d, 984154)));
        }, []);
        let [u, h] = (0, e.u)(
            () => {
                if (t) return t;
                if (!l) throw Error("Selfie config is required when no manager is provided");
                return (0, m.y6)({ config: l });
            },
            { manageLifecycle: !t },
        );
        return ((0, e.c)({ status: u.status, onFinish: c, onError: b, error: "error" === u.status ? u.error : void 0 }),
        "idle" === u.status || "loading" === u.status)
            ? (0, i.v)(a.t, { hideText: !0 })
            : "tutorial" === u.status
              ? (0, i.v)(n.t, { manager: h, ageAssurance: u.ageAssurance })
              : "permissions" === u.status
                ? (0, i.v)(Z.i, { manager: h, permissionStatus: u.permissionStatus })
                : "capture" === u.status
                  ? (0, i.v)(n.n, { manager: h, state: u })
                  : "processing" === u.status
                    ? (0, i.v)(s.t, {})
                    : ((0, e.s)(u), null);
    },
    h = ({ config: l, manager: t, onFinish: d, onError: e }) =>
        (0, i.v)(c.t, { children: l || t ? (0, i.v)(u, { config: l, manager: t, onFinish: d, onError: e }) : null });
(0, b.t)(h, "incode-selfie");
