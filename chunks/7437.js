n.d(t, { A: () => h });
var i = n(582128),
    r = n(691540),
    l = n(857250),
    a = n(97483),
    s = n(680439),
    o = n(375708);
function c(e) {
    let { text: t, ok: n } = (function (e) {
        switch (e) {
            case "dispatched":
                return { text: o.intl.string(s.default["um/5Kc"]), ok: !0 };
            case "rate_limited":
                return { text: o.intl.string(s.default.T1n7hc), ok: !1 };
            case "unauthorized":
                return { text: o.intl.string(s.default["30UxZU"]), ok: !1 };
            case "no_widget_config":
                return { text: o.intl.string(s.default["1UFWet"]), ok: !1 };
            case "undeliverable":
                return { text: o.intl.string(s.default.ypKX9A), ok: !1 };
            default:
                return { text: o.intl.string(s.default.BLKD4B), ok: !1 };
        }
    })(e);
    (0, r.P0)((0, l.o)(t, n ? a.Ck.SUCCESS : a.Ck.FAILURE));
}
var d = n(51906),
    u = n(636537),
    g = n(652215);
let f = new d.Zy();
function h(e) {
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
            f
                .one(e, async () => {
                    try {
                        return (
                            await u.Bo.post({
                                url: g.Rsh.APPLICATION_WIDGET_REFRESH(e),
                                rejectWithError: !0,
                                failImmediatelyWhenRateLimited: !0,
                            }),
                            "dispatched"
                        );
                    } catch (e) {
                        switch (
                            (function (e) {
                                if (e instanceof u.oh) return e.status;
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
                .then(c)
                .finally(() => {
                    r.current && n(!1);
                }));
    }, [e, t]);
    return { pending: t, refresh: l };
}
