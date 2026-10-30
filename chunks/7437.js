r.d(e, { A: () => f });
var n = r(582128),
    i = r(858899),
    u = r(786884),
    a = r(105292);
function s(t) {
    let { text: e, ok: r } = (function (t) {
        switch (t) {
            case "dispatched":
                return { text: a.intl.string(u.default["um/5Kc"]), ok: !0 };
            case "rate_limited":
                return { text: a.intl.string(u.default.T1n7hc), ok: !1 };
            case "unauthorized":
                return { text: a.intl.string(u.default["30UxZU"]), ok: !1 };
            case "no_widget_config":
                return { text: a.intl.string(u.default["1UFWet"]), ok: !1 };
            case "undeliverable":
                return { text: a.intl.string(u.default.ypKX9A), ok: !1 };
            default:
                return { text: a.intl.string(u.default.BLKD4B), ok: !1 };
        }
    })(t);
    (0, i.P0)({ text: e, variant: r ? "success" : "critical" });
}
var c = r(51906),
    l = r(636537),
    d = r(652215);
let o = new c.Zy();
function f(t) {
    let [e, r] = n.useState(!1),
        i = n.useRef(!0);
    n.useEffect(
        () => (
            (i.current = !0),
            () => {
                i.current = !1;
            }
        ),
        [],
    );
    let u = n.useCallback(() => {
        !e &&
            null != t &&
            (r(!0),
            o
                .one(t, async () => {
                    try {
                        return (
                            await l.Bo.post({
                                url: d.Rsh.APPLICATION_WIDGET_REFRESH(t),
                                rejectWithError: !0,
                                failImmediatelyWhenRateLimited: !0,
                            }),
                            "dispatched"
                        );
                    } catch (t) {
                        switch (
                            (function (t) {
                                if (t instanceof l.oh) return t.status;
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
                })
                .then(s)
                .finally(() => {
                    i.current && r(!1);
                }));
    }, [t, e]);
    return { pending: e, refresh: u };
}
