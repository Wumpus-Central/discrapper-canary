a.d(e, { A: () => I });
var i = a(485845),
    l = a(179771),
    n = a(858899),
    s = a(384739),
    r = a(610056),
    c = a(633075),
    o = a(958805),
    d = a(61881),
    u = a(735321),
    p = a(998218),
    A = a(361504),
    f = a(260498),
    E = a(191850),
    m = a(792996);
let g = new Set();
function I(t, e) {
    let a = f.Ay.findProjectByApplicationId(t)?.id;
    null != a &&
        (0, r.openOAuth2Modal)({
            clientId: t,
            scopes: [l.F.IDENTIFY, l.F.APPLICATION_IDENTITIES_WRITE],
            responseType: "code",
            redirectUri: "https://127.0.0.1",
            integrationType: i.b.GUILD_INSTALL,
            callback: (i) => {
                let { location: l } = i,
                    r = p.A.toURLSafe(l ?? "")?.searchParams.get("code");
                return (
                    null != r &&
                        (async function (t, e, a, i) {
                            if (!g.has(e)) {
                                g.add(e);
                                try {
                                    await (async function (t, e, a, i) {
                                        try {
                                            (await (async function (t, e) {
                                                let a,
                                                    i = await fetch(
                                                        `${((a = (0, A.d)()), null != a ? a : (0, A.b)() ? "http://localhost:8787" : window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") ? "https://conjure.town" : "https://conjure.city")}/agent/widget-consent`,
                                                        {
                                                            method: "POST",
                                                            headers: { "content-type": "application/json" },
                                                            body: JSON.stringify({ project_id: t, code: e }),
                                                        },
                                                    );
                                                if (!i.ok) throw Error(`widget consent failed (${i.status})`);
                                            })(t, a),
                                                await (async function (t) {
                                                    let e = new c.R({ applicationId: t });
                                                    if (d.A.hasPendingChanges()) (0, u.Y5)(e);
                                                    else {
                                                        let t = (0, u.BF)().filter(
                                                            (t) => t.getUniqueKey() !== e.getUniqueKey(),
                                                        );
                                                        await o.A.savePendingWidgets([e, ...t]);
                                                    }
                                                })(e));
                                        } catch {
                                            (0, n.P0)({ text: m.intl.string(E.default.to9Sp4), variant: "critical" });
                                            return;
                                        }
                                        (i?.(), await (0, s.i)(e));
                                    })(t, e, a, i);
                                } finally {
                                    g.delete(e);
                                }
                            }
                        })(a, t, r, e),
                    !0
                );
            },
        });
}
