n.d(t, { Z: () => E });
var r = n(925477),
    i = n(381499),
    a = n(601992),
    o = n(675478),
    s = n(885110),
    l = n(626135),
    c = n(51144),
    u = n(174415),
    d = n(981631),
    f = n(388032);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    let n = (0, c.u5)(e);
    if ("0" === t) return f.intl.formatToPlainString(f.t.dO2aLi, { statusLabel: n });
    let { kind: r, dateString: i, timeString: a } = (0, u.k)(t);
    return "today" === r
        ? f.intl.formatToPlainString(f.t["r50t/S"], {
              statusLabel: n,
              timeString: a,
          })
        : f.intl.formatToPlainString(f.t["J+GJHv"], {
              statusLabel: n,
              dateString: i,
              timeString: a,
          });
}
async function E(e) {
    let { nextStatus: t, prevStatus: n, analyticsContext: c, durationMillis: u, disableTracking: f = !1 } = e;
    null == n && (n = s.Z.getStatus());
    let p = null != u ? "".concat(Date.now() + u) : "0";
    await o.hW.updateAsync(
        "status",
        (e) => {
            (e.status = i.Gm.create({ value: t })),
                (e.statusExpiresAtMs = p),
                (e.statusCreatedAtMs =
                    n === t && null != e.statusCreatedAtMs
                        ? e.statusCreatedAtMs
                        : i.wA.create({ value: "".concat(Date.now()) }));
        },
        o.fy.INFREQUENT_USER_ACTION,
    );
    let m = g(t, p);
    if ((r.uv.announce(m), f)) return;
    let E = _(
        {
            next_status: t,
            prev_status: n,
        },
        a.Z.getGlobalStats(),
    );
    null != u && (E = h(_({}, E), { expire_duration_minutes: null != u ? u / 60000 : null })),
        null != c && (E = _({}, E, c)),
        l.default.track(d.rMx.USER_STATUS_UPDATED, E);
}
