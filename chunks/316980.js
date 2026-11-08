l.d(n, { A: () => c });
var t = l(582128),
    r = l(855986),
    o = l(11044),
    u = l(287809),
    a = l(503275),
    s = l(499466),
    i = l(233470),
    d = l(260498);
function c(e, n, l) {
    let {
            project: c,
            remixProject: v,
            editProject: f,
            isSettled: m,
        } = (function (e, n, l) {
            let o = (0, s.m0)({ guildId: n ?? void 0, location: "ConjureAppHoverCard" }) && null != n;
            t.useEffect(() => {
                l && null != e && (0, i.tF)([e]);
            }, [l, e]);
            let { project: u, isUnavailable: a } = (0, r.cf)(
                [d.Ay],
                () => ({
                    project: null != e ? (d.Ay.getProject(e) ?? null) : null,
                    isUnavailable: null != e && (0, i.su)(e),
                }),
                [e],
            );
            return t.useMemo(
                () => ({
                    project: u,
                    remixProject: o && null != u && (0, d.H_)(u) ? u : null,
                    editProject: null != u && (0, d.PV)(u) ? u : null,
                    isSettled: null == e || null != u || a,
                }),
                [u, o, e, a],
            );
        })(e?.conjureProjectId ?? null, n, l),
        g = c?.owner_user_id ?? null,
        [p, j] = t.useState(null);
    t.useEffect(() => {
        if (!l || null == g) return;
        let e = !0;
        return (
            !(async function (n) {
                (await (0, a.Y_)(n), e && null == u.default.getUser(n) && j(n));
            })(g),
            () => {
                e = !1;
            }
        );
    }, [l, g]);
    let x = (0, r.bG)([u.default], () => (null != g ? (u.default.getUser(g) ?? null) : null), [g]),
        C = x?.getAvatarURL(n, 32);
    return (
        t.useEffect(() => {
            l && null != C && (0, o.N)(C);
        }, [l, C]),
        t.useMemo(
            () => ({
                creator: x,
                remixProject: v,
                editProject: f,
                isSettled: null != e && m && (null == g || null != x || p === g),
            }),
            [x, v, f, e, m, g, p],
        )
    );
}
