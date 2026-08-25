n.d(t, { A: () => f });
var i = n(582128),
    r = n(691540),
    l = n(857250),
    a = n(97483),
    s = n(552609),
    o = n(375708),
    c = n(51906),
    d = n(636537),
    u = n(652215);
let g = new c.Zy();
function f(e) {
    let [t, n] = i.useState(!1),
        c = i.useRef(!0);
    i.useEffect(
        () => (
            (c.current = !0),
            () => {
                c.current = !1;
            }
        ),
        [],
    );
    let f = i.useCallback(() => {
        !t &&
            null != e &&
            (n(!0),
            g
                .one(e, async () => {
                    try {
                        return (
                            await d.Bo.post({
                                url: u.Rsh.APPLICATION_WIDGET_REFRESH(e),
                                rejectWithError: !0,
                                failImmediatelyWhenRateLimited: !0,
                            }),
                            "dispatched"
                        );
                    } catch (e) {
                        switch (
                            (function (e) {
                                if (e instanceof d.oh) return e.status;
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
                .then((e) => {
                    let t = (function (e) {
                        switch (e) {
                            case "dispatched":
                                return { text: o.intl.string(s.default["um/5Kc"]), type: a.Ck.SUCCESS };
                            case "rate_limited":
                                return { text: o.intl.string(s.default.T1n7hc), type: a.Ck.FAILURE };
                            case "unauthorized":
                                return { text: o.intl.string(s.default["30UxZU"]), type: a.Ck.FAILURE };
                            case "no_widget_config":
                                return { text: o.intl.string(s.default["1UFWet"]), type: a.Ck.FAILURE };
                            case "undeliverable":
                                return { text: o.intl.string(s.default.ypKX9A), type: a.Ck.FAILURE };
                            default:
                                return { text: o.intl.string(s.default.BLKD4B), type: a.Ck.FAILURE };
                        }
                    })(e);
                    (0, r.P0)((0, l.o)(t.text, t.type));
                })
                .finally(() => {
                    c.current && n(!1);
                }));
    }, [e, t]);
    return { pending: t, refresh: f };
}
