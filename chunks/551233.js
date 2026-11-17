var l = n(582128),
    r = n(855986),
    i = n(71393),
    a = n(576705),
    o = n(122393),
    u = n(233470),
    s = n(260498),
    c = n(951178),
    d = n(16619),
    f = n(722701),
    p = n(811587),
    h = n(826058),
    g = n(246338),
    m = n(652215),
    y = n(191850),
    x = n(792996);
function b(t) {
    let e = f.A.getPublishStatus(t)?.publishState;
    return null != e && (0, p.Uh)(e);
}
n.d(
    e,
    {},
    {
        A: function (t, e, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                p = (0, r.bG)([s.Ay], () => s.Ay.getProject(t), [t]),
                g = (0, r.bG)([s.Ay], () => s.Ay.getIntegrationStatus(t)?.preview_ready === !0, [t]),
                v = (0, d.z9)("ConjureShareToServer"),
                w = null != p && "user" === p.install_scope && (0, s.PV)(p),
                [j] = l.useState(() => (i && null != p ? (0, c.Jr)(p) : [])),
                k = (0, r.yK)([a.A], () => v.filter((t) => a.A.can(m.xBc.MANAGE_GUILD, t) && !j.includes(t.id)), [
                    v,
                    j,
                ]),
                [S, _] = l.useState(null),
                A = [S, p?.guild_id, e].map((t) => k.find((e) => e.id === t)).find((t) => null != t) ?? k[0] ?? null,
                [P, I] = l.useState(!1),
                [C, D] = l.useState(null),
                M = l.useCallback((t) => {
                    (_(t), D(null));
                }, []),
                T = l.useCallback(async () => {
                    let e = x.intl.string(y.default.qDjkvv);
                    if (null == A) return { shared: !1, error: e };
                    (I(!0), D(null));
                    let n = i ? null : (0, o.v)(t, 3e4);
                    try {
                        await (0, u.fh)(t, A.id);
                    } catch (r) {
                        n?.cancel();
                        let t = r?.body?.message,
                            l = "string" == typeof t ? t : e;
                        return (D(l), I(!1), { shared: !1, error: l });
                    }
                    if (null == n) return (I(!1), { shared: !0, next: "added" });
                    let l = s.Ay.getProject(t);
                    if (null != l && !(0, c._7)(l)) {
                        (n.cancel(), I(!1));
                        let e = f.A.getPublishStatus(t)?.publishState === "not_live";
                        return (
                            e ||
                                (function t(e, n) {
                                    setTimeout(() => {
                                        s.Ay.getIntegrationStatus(e)?.integration_installed !== !0 &&
                                            ((0, u.GO)(e), n > 1 && t(e, n - 1));
                                    }, 1500);
                                })(t, 6),
                            { shared: !0, next: e ? "publish" : "added" }
                        );
                    }
                    let r =
                        (await n.published) &&
                        (await (async function (t) {
                            let e = Date.now() + 5e3;
                            for (; !b(t) && Date.now() < e;) await new Promise((t) => setTimeout(t, 250));
                            return b(t);
                        })(t));
                    return (I(!1), { shared: !0, next: r ? "publish" : "await_test_app" });
                }, [i, A, t]),
                E = l.useCallback(
                    async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (null != n && null != A)
                            try {
                                await (0, h.FZ)(t, "share", { platform: n.platform, guildId: A.id }, e);
                            } catch {}
                    },
                    [A, t, n],
                );
            return {
                available: w && g && k.length > 0,
                guilds: k,
                guild: A,
                pickGuild: M,
                sharing: P,
                error: C,
                share: T,
                publish: E,
            };
        },
        i: function (t, e, n) {
            let l = t.guild_ids;
            return (
                !!(0, s.PV)(t) &&
                null != e &&
                null != l &&
                !(l.length >= 10) &&
                Object.values(i.A.getGuilds()).some((t) => !l.includes(t.id) && (0, g.sM)(t, n))
            );
        },
    },
);
