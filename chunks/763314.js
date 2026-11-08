a.d(e, { A: () => h });
var i = a(858899),
    l = a(610056),
    n = a(485845),
    s = a(179771),
    r = a(384739),
    c = a(633075),
    o = a(958805),
    d = a(61881),
    u = a(735321),
    p = a(856383),
    A = a(998218),
    f = a(361504),
    E = a(260498),
    m = a(191850),
    g = a(792996);
let I = new Set();
function h(t, e) {
    var a;
    let h,
        L =
            ((a = { onTurnedOn: e, showToast: i.P0 }),
            null == (h = E.Ay.findProjectByApplicationId(t)?.id)
                ? null
                : {
                      clientId: t,
                      scopes: [s.F.IDENTIFY, s.F.APPLICATION_IDENTITIES_WRITE],
                      responseType: "code",
                      redirectUri: "https://127.0.0.1",
                      integrationType: n.b.GUILD_INSTALL,
                      callback: (e) => {
                          let { location: i } = e,
                              l = A.A.toURLSafe(i ?? "")?.searchParams.get("code");
                          return (
                              null != l &&
                                  (async function (t, e, a, i) {
                                      if (!I.has(e)) {
                                          I.add(e);
                                          try {
                                              await (async function (t, e, a, i) {
                                                  let { onTurnedOn: l, showToast: n } = i;
                                                  try {
                                                      (await (async function (t, e) {
                                                          let a,
                                                              i = await fetch(
                                                                  `${((a = (0, f.d)()), null != a ? a : (0, f.b)() ? "http://localhost:8787" : window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") ? "https://conjure.town" : "https://conjure.city")}/agent/widget-consent`,
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
                                                      n({ text: g.intl.string(m.default.to9Sp4), variant: "critical" });
                                                      return;
                                                  }
                                                  try {
                                                      l?.();
                                                  } catch (t) {
                                                      p.A.captureException(t);
                                                  }
                                                  await (0, r.i)(e);
                                              })(t, e, a, i);
                                          } finally {
                                              I.delete(e);
                                          }
                                      }
                                  })(h, t, l, a),
                              !0
                          );
                      },
                  });
    null != L && (0, l.openOAuth2Modal)(L);
}
