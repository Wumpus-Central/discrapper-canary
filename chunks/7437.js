n.d(t, { A: () => g });
var i = n(582128),
    r = n(858899),
    l = n(680439),
    a = n(105292);
function s(e) {
    let { text: t, ok: n } = (function (e) {
        switch (e) {
            case "dispatched":
                return { text: a.intl.string(l.default["um/5Kc"]), ok: !0 };
            case "rate_limited":
                return { text: a.intl.string(l.default.T1n7hc), ok: !1 };
            case "unauthorized":
                return { text: a.intl.string(l.default["30UxZU"]), ok: !1 };
            case "no_widget_config":
                return { text: a.intl.string(l.default["1UFWet"]), ok: !1 };
            case "undeliverable":
                return { text: a.intl.string(l.default.ypKX9A), ok: !1 };
            default:
                return { text: a.intl.string(l.default.BLKD4B), ok: !1 };
        }
    })(e);
    (0, r.P0)({ text: t, variant: n ? "success" : "critical" });
}
var o = n(51906),
    c = n(636537),
    d = n(652215);
let u = new o.Zy();
function g(e) {
    let [t, n] = i.useState(!1),
        r = i.useRef(!0);
    i.useEffect(
        () => (
            (r.current = !0),
            () => {
                r.current = !1;
            }
        ),
        [],
    );
    let l = i.useCallback(() => {
        !t &&
            null != e &&
            (n(!0),
            u
                .one(e, async () => {
                    try {
                        return (
                            await c.Bo.post({
                                url: d.Rsh.APPLICATION_WIDGET_REFRESH(e),
                                rejectWithError: !0,
                                failImmediatelyWhenRateLimited: !0,
                            }),
                            "dispatched"
                        );
                    } catch (e) {
                        switch (
                            (function (e) {
                                if (e instanceof c.oh) return e.status;
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
                })
                .then(s)
                .finally(() => {
                    r.current && n(!1);
                }));
    }, [e, t]);
    return { pending: t, refresh: l };
}
