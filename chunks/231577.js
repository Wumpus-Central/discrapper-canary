var r = n(690094),
    i = n(826476),
    o = n(978862);
function a(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
n.d(
    t,
    {},
    {
        $X: function (e) {
            let { message: t, event_id: n } = e;
            if (t) return t;
            let r = a(e);
            return r
                ? r.type && r.value
                    ? `${r.type}: ${r.value}`
                    : r.type || r.value || n || "<unknown>"
                : n || "<unknown>";
        },
        GR: function (e) {
            if (
                (function (e) {
                    try {
                        return e.__sentry_captured__;
                    } catch (e) {}
                })(e)
            )
                return !0;
            try {
                (0, r.my)(e, "__sentry_captured__", !0);
            } catch (e) {}
            return !1;
        },
        M6: function (e, t) {
            let n = a(e);
            if (!n) return;
            let r = n.mechanism;
            if (((n.mechanism = { type: "generic", handled: !0, ...r, ...t }), t && "data" in t)) {
                let e = { ...(r && r.data), ...t.data };
                n.mechanism.data = e;
            }
        },
        db: function (e, t, n = 5) {
            if (void 0 === t.lineno) return;
            let r = e.length,
                o = Math.max(Math.min(r - 1, t.lineno - 1), 0);
            t.pre_context = e.slice(Math.max(0, o - n), o).map((e) => (0, i.nC)(e, 0));
            let a = Math.min(r - 1, o);
            ((t.context_line = (0, i.nC)(e[a], t.colno || 0)),
                (t.post_context = e.slice(Math.min(o + 1, r), o + 1 + n).map((e) => (0, i.nC)(e, 0))));
        },
        eJ: function () {
            let e = o.O,
                t = e.crypto || e.msCrypto,
                n = () => 16 * Math.random();
            try {
                if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
                t &&
                    t.getRandomValues &&
                    (n = () => {
                        let e = new Uint8Array(1);
                        return (t.getRandomValues(e), e[0]);
                    });
            } catch (e) {}
            return "10000000100040008000100000000000".replace(/[018]/g, (e) =>
                (e ^ ((15 & n()) >> (e / 4))).toString(16),
            );
        },
        gO: function (e, t, n) {
            let r = (e.exception = e.exception || {}),
                i = (r.values = r.values || []),
                o = (i[0] = i[0] || {});
            (o.value || (o.value = t || ""), o.type || (o.type = n || "Error"));
        },
    },
);
