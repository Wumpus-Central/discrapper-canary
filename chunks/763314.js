a.d(e, { A: () => R });
var i = a(858899),
    l = a(610056),
    n = a(485845),
    r = a(179771),
    s = a(384739),
    c = a(633075),
    o = a(958805),
    d = a(61881),
    u = a(735321),
    p = a(856383),
    E = a(998218),
    A = a(361504),
    I = a(316601),
    f = a(191850),
    _ = a(792996);
let g = new Set();
function R(t, e) {
    var a;
    let R,
        L =
            ((a = { onTurnedOn: e, showToast: i.P0 }),
            null == (R = I.A.getProject(t)?.id)
                ? null
                : {
                      clientId: t,
                      scopes: [r.F.IDENTIFY, r.F.APPLICATION_IDENTITIES_WRITE],
                      responseType: "code",
                      redirectUri: "https://127.0.0.1",
                      integrationType: n.b.GUILD_INSTALL,
                      callback: (e) => {
                          let { location: i } = e,
                              l = E.A.toURLSafe(i ?? "")?.searchParams.get("code");
                          return (
                              null != l &&
                                  (async function (t, e, a, i) {
                                      if (!g.has(e)) {
                                          g.add(e);
                                          try {
                                              await (async function (t, e, a, i) {
                                                  let { onTurnedOn: l, showToast: n } = i;
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
                                                      n({ text: _.intl.string(f.default.to9Sp4), variant: "critical" });
                                                      return;
                                                  }
                                                  try {
                                                      l?.();
                                                  } catch (t) {
                                                      p.A.captureException(t);
                                                  }
                                                  await (0, s.i)(e);
                                              })(t, e, a, i);
                                          } finally {
                                              g.delete(e);
                                          }
                                      }
                                  })(R, t, l, a),
                              !0
                          );
                      },
                  });
    null != L && (0, l.openOAuth2Modal)(L);
}
