var n = r(51906),
    a = r(620632),
    i = r(652215);
let s = new n.Zy();
r.d(
    e,
    {},
    {
        i: function (t) {
            return s.one(t, async () => {
                try {
                    return (
                        await a.Bo.post({
                            url: i.Rsh.APPLICATION_WIDGET_REFRESH(t),
                            rejectWithError: !0,
                            failImmediatelyWhenRateLimited: !0,
                        }),
                        "dispatched"
                    );
                } catch (t) {
                    switch (
                        (function (t) {
                            if (t instanceof a.oh) return t.status;
                            let e = t?.status;
                            return "number" == typeof e ? e : void 0;
                        })(t)
                    ) {
                        case 403:
                            return "unauthorized";
                        case 404:
                            return "no_widget_config";
                        case 429:
                            return "rate_limited";
                        case 503:
                            return "undeliverable";
                        default:
                            return "failed";
                    }
                }
            });
        },
    },
);
