n.d(t, { Z: () => c });
var r = n(325854),
    i = n(86465),
    a = n(800911),
    o = n(344368);
let s = 1,
    l = 2;
class c extends o.F {
    innerPatternString(e) {
        return `(в минулому|у минулому|на минулому|минулого|на наступному|в наступному|у наступному|наступного|на цьому|в цьому|у цьому|цього)\\s*(${(0, a.q3)(r.pS)})(?=\\s*)`;
    }
    innerExtract(e, t) {
        let n = t[s].toLowerCase(),
            a = t[l].toLowerCase(),
            o = r.pS[a];
        if ("на наступному" == n || "в наступному" == n || "у наступному" == n || "наступного" == n) {
            let t = {};
            return (t[o] = 1), i.L.createRelativeFromReference(e.reference, t);
        }
        if ("на минулому" == n || "в минулому" == n || "у минулому" == n || "минулого" == n) {
            let t = {};
            return (t[o] = -1), i.L.createRelativeFromReference(e.reference, t);
        }
        let c = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return (
            o.match(/week/i)
                ? (u.setDate(u.getDate() - u.getDay()),
                  c.imply("day", u.getDate()),
                  c.imply("month", u.getMonth() + 1),
                  c.imply("year", u.getFullYear()))
                : o.match(/month/i)
                  ? (u.setDate(1),
                    c.imply("day", u.getDate()),
                    c.assign("year", u.getFullYear()),
                    c.assign("month", u.getMonth() + 1))
                  : o.match(/year/i) &&
                    (u.setDate(1),
                    u.setMonth(0),
                    c.imply("day", u.getDate()),
                    c.imply("month", u.getMonth() + 1),
                    c.assign("year", u.getFullYear())),
            c
        );
    }
}
