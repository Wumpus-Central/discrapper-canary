n(321073);
var i = n(620632),
    r = n(361504),
    a = n(652215);
let s = new Map(),
    l = [];
async function o(e) {
    let { body: t } = await i.Bo.post({ url: e, rejectWithError: !0 });
    return d(t);
}
function d(e) {
    let { ticket: t, url: n } = e;
    return { ticket: t, baseUrl: (0, r.d)() ?? n };
}
n.d(
    t,
    {},
    {
        $Y: function (e) {
            s.delete(e);
        },
        Et: function (e) {
            let t = Date.now(),
                n = s.get(e);
            if (null != n && n.until > t) return;
            for (; l.length > 0 && t - l[0] > 6e4;) l.shift();
            if (l.length >= 5) return;
            l.push(t);
            let i = o(a.Rsh.CONJURE_PROJECT_WS_TICKET(e)),
                r = { ticket: i, until: Date.now() + 3e4 };
            (s.set(e, r),
                i.catch(() => {
                    s.get(e) === r && s.delete(e);
                }));
        },
        dv: function (e) {
            let t = s.get(e);
            return null != t && t.until > Date.now() ? t.ticket : (s.delete(e), o(a.Rsh.CONJURE_PROJECT_WS_TICKET(e)));
        },
        gA: function (e) {
            return o(a.Rsh.CONJURE_PROJECT_REMIX_TICKET(e));
        },
        k9: function () {
            s.clear();
        },
        vG: function (e, t) {
            s.set(e, { ticket: Promise.resolve(d(t)), until: Date.now() + 3e4 });
        },
    },
);
