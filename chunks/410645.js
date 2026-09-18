n.d(t, { A: () => f });
var i = n(582128),
    r = n(691540),
    l = n(857250),
    a = n(51906),
    s = n(636537),
    o = n(652215);
let c = new a.Zy();
var d = n(97483),
    u = n(887725),
    g = n(375708);
function f(e) {
    let [t, n] = i.useState(!1),
        a = i.useRef(!0);
    i.useEffect(
        () => (
            (a.current = !0),
            () => {
                a.current = !1;
            }
        ),
        [],
    );
    let f = i.useCallback(() => {
        !t &&
            null != e &&
            (n(!0),
            c
                .one(e, async () => {
                    try {
                        return (
                            await s.Bo.post({
                                url: o.Rsh.APPLICATION_WIDGET_REFRESH(e),
                                rejectWithError: !0,
                                failImmediatelyWhenRateLimited: !0,
                            }),
                            "dispatched"
                        );
                    } catch (e) {
                        switch (
                            (function (e) {
                                if (e instanceof s.oh) return e.status;
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
                        let { text: t, ok: n } = (function (e) {
                            switch (e) {
                                case "dispatched":
                                    return { text: g.intl.string(u.default["um/5Kc"]), ok: !0 };
                                case "rate_limited":
                                    return { text: g.intl.string(u.default.T1n7hc), ok: !1 };
                                case "unauthorized":
                                    return { text: g.intl.string(u.default["30UxZU"]), ok: !1 };
                                case "no_widget_config":
                                    return { text: g.intl.string(u.default["1UFWet"]), ok: !1 };
                                case "undeliverable":
                                    return { text: g.intl.string(u.default.ypKX9A), ok: !1 };
                                default:
                                    return { text: g.intl.string(u.default.BLKD4B), ok: !1 };
                            }
                        })(e);
                        return { text: t, type: n ? d.Ck.SUCCESS : d.Ck.FAILURE };
                    })(e);
                    (0, r.P0)((0, l.o)(t.text, t.type));
                })
                .finally(() => {
                    a.current && n(!1);
                }));
    }, [e, t]);
    return { pending: t, refresh: f };
}
