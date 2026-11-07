var i = r(51906),
    n = r(620632),
    a = r(652215);
let u = new i.Zy();
r.d(
    t,
    {},
    {
        i: function (e) {
            return u.one(e, async () => {
                try {
                    return (
                        await n.Bo.post({
                            url: a.Rsh.APPLICATION_WIDGET_REFRESH(e),
                            rejectWithError: !0,
                            failImmediatelyWhenRateLimited: !0,
                        }),
                        "dispatched"
                    );
                } catch (e) {
                    switch (
                        (function (e) {
                            if (e instanceof n.oh) return e.status;
                            let t = e?.status;
                            return "number" == typeof t ? t : void 0;
                        })(e)
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
