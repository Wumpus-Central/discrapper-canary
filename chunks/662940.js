n.d(e, { C0: () => E, CK: () => T, Dd: () => A, UK: () => c, pv: () => C, vj: () => d });
var s,
    i = n(927813),
    a = n(792620),
    o = n(814793),
    r = n(79545),
    l = n(190107),
    u = n(375708),
    c =
        21552 == n.j
            ? (((s = {})[(s.PLAY = 0)] = "PLAY"),
              (s[(s.WATCH = 1)] = "WATCH"),
              (s[(s.ACTIVITY = 2)] = "ACTIVITY"),
              (s[(s.INSTANT_PLAY = 3)] = "INSTANT_PLAY"),
              (s[(s.ARENA = 4)] = "ARENA"),
              s)
            : null;
function C(t) {
    return (0, a.GL)(t)
        ? 4 * !!(0, o.ui)(t)
        : (0, a.vv)(t)
          ? 1
          : (0, a.Ki)(t)
            ? t.config.features.includes(l.Li.CLOUD_GAMING_ACTIVITY)
                ? 3
                : 2
            : 0;
}
function E(t) {
    switch (C(t)) {
        case 0:
            return u.intl.string(u.t.U7cCLU);
        case 1:
            return u.intl.string(u.t.kfks9Y);
        case 2:
            return u.intl.string(u.t.U0sDwa);
        case 3:
            return u.intl.string(u.t.V5Qt9D);
        case 4:
            return u.intl.string(u.t.P1uOM8);
    }
}
function d(t) {
    switch (C(t)) {
        case 3:
            return u.intl.string(u.t.C2kQR8);
        case 1:
            return u.intl.string(u.t.PMVy7M);
        case 2:
            return u.intl.string(u.t.RPSnmI);
        default:
            return u.intl.string(u.t.cfY4PE);
    }
}
function A(t, e, n) {
    let s = new Date(t.startsAt).getTime(),
        a = Date.now(),
        o = s <= a && a - s < 2 * i.A.Millis.DAY;
    if (n) return null;
    switch (e) {
        case r.UA.UNENROLLED:
            if (o) return u.intl.string(u.t.X6ziWN);
            return null;
        case r.UA.COMPLETED:
        case r.UA.EXPIRED_CLAIMABLE:
            return u.intl.string(u.t.Zq6s9k);
        case r.UA.CLAIMED:
            return u.intl.string(u.t.uOGFB6);
        case r.UA.EXPIRED:
            return u.intl.string(u.t["zX/gnV"]);
        default:
            return null;
    }
}
function T(t, e, n, s) {
    switch (t) {
        case r.UA.UNENROLLED:
            if (s) return u.intl.string(u.t.G6np6x);
        case r.UA.ENROLLED:
        case r.UA.INCOMPLETE:
            if (null != n) return `${n.progress}/${n.target}`;
            return (0, a.xm)(e);
        case r.UA.COMPLETED:
        case r.UA.CLAIMED:
        case r.UA.EXPIRED:
        case r.UA.EXPIRED_CLAIMABLE:
            return null;
    }
}
