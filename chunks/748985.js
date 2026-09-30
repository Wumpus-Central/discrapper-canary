i.d(e, { default: () => v });
var n = i(477900),
    l = i(582128),
    s = i(314116),
    a = i(224640),
    r = i(331322),
    c = i(408278),
    o = i(789645),
    d = i(297264),
    u = i(834730),
    h = i(95477),
    m = i(825484),
    g = i(821609),
    x = i(957565),
    f = i(277977);
let p = { setTimeout: (t, e) => setTimeout(t, e), clearTimeout: (t) => clearTimeout(t), now: () => Date.now() };
class j {
    fetchConnection;
    onChange;
    timers;
    state = { connection: null, loading: !0, failed: !1 };
    generation = 0;
    timer = null;
    disposed = !1;
    constructor(t, e, i = p) {
        ((this.fetchConnection = t), (this.onChange = e), (this.timers = i));
    }
    getState() {
        return this.state;
    }
    async mint(t) {
        let e,
            i = ++this.generation;
        (t && this.cancelTimer(), this.update({ ...this.state, loading: !0, failed: !1 }));
        try {
            e = await this.fetchConnection(t);
        } catch {
            if (this.isStale(i)) return;
            this.update({ connection: t ? null : this.state.connection, loading: !1, failed: !0 });
            return;
        }
        if (this.isStale(i)) return;
        let n = this.state.connection;
        null != n && n.url === e.url && null != this.timer
            ? this.update({ ...this.state, loading: !1, failed: !1 })
            : (this.update({ connection: e, loading: !1, failed: !1 }), this.armTimer(e));
    }
    dispose() {
        ((this.disposed = !0), this.generation++, this.cancelTimer());
    }
    isStale(t) {
        return this.disposed || t !== this.generation;
    }
    armTimer(t) {
        this.cancelTimer();
        let e = Math.max(t.expiresAtMs - this.timers.now() + 1e3, 15e3);
        this.timer = this.timers.setTimeout(() => {
            ((this.timer = null), this.mint(!1).catch(() => {}));
        }, e);
    }
    cancelTimer() {
        null != this.timer && (this.timers.clearTimeout(this.timer), (this.timer = null));
    }
    update(t) {
        ((this.state = t), this.disposed || this.onChange(t));
    }
}
var C = i(759967),
    T = i(375708),
    b = i(397239);
function v(t) {
    let { projectId: e, transitionState: i, onClose: p } = t,
        {
            connection: v,
            loading: k,
            failed: w,
            mint: y,
        } = (function (t) {
            let [e, i] = l.useState({ connection: null, loading: !0, failed: !1 }),
                n = l.useRef(null);
            l.useEffect(() => {
                let e = new j((e) => (0, f.y_)(t, { regenerate: e }), i);
                return (
                    (n.current = e),
                    e.mint(!1).catch(() => {}),
                    () => {
                        (e.dispose(), n.current === e && (n.current = null));
                    }
                );
            }, [t]);
            let s = l.useCallback((t) => {
                n.current?.mint(t).catch(() => {});
            }, []);
            return { ...e, mint: s };
        })(e),
        [z, S] = l.useState(null),
        N = null != v && z === v.url,
        B = l.useCallback(() => {
            if (null == v) return;
            let { url: t } = v;
            (0, x.C)(t, () => S(t));
        }, [v]),
        E = l.useCallback(() => {
            (0, s.A)({
                title: T.intl.string(C.default.jKNAzJ),
                subtitle: T.intl.string(C.default.oWzC0r),
                confirmText: T.intl.string(C.default.dZxnCn),
                variant: "critical",
                onConfirm: () => {
                    y(!0);
                },
            });
        }, [y]),
        A = T.intl.string(C.default["xMOS+Z"]);
    return (0, n.jsx)(a.d, {
        transitionState: i,
        onClose: p,
        "aria-label": A,
        size: "md",
        children: (0, n.jsxs)(r.B, {
            gap: 24,
            padding: { top: 16, right: 24, bottom: 8, left: 24 },
            className: b.GV,
            children: [
                (0, n.jsx)("div", {
                    className: b.b,
                    children: (0, n.jsx)(c.K, {
                        "aria-label": T.intl.string(T.t.cpT0Cq),
                        icon: o.P,
                        onClick: p,
                        variant: "secondary",
                        size: "sm",
                    }),
                }),
                (0, n.jsxs)(r.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(d.D, { variant: "heading-lg/semibold", color: "text-strong", children: A }),
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: T.intl.string(C.default["1Ew5/j"]),
                        }),
                    ],
                }),
                null != v
                    ? (0, n.jsxs)(r.B, {
                          gap: 8,
                          children: [
                              (0, n.jsxs)(r.B, {
                                  direction: "horizontal",
                                  align: "end",
                                  gap: 8,
                                  className: b._T,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: b.UQ,
                                          children: (0, n.jsx)(h.k, {
                                              label: T.intl.string(C.default.DRgXyU),
                                              value: v.url,
                                              readOnly: !0,
                                              fullWidth: !0,
                                              onFocus: (t) => t.currentTarget.select(),
                                          }),
                                      }),
                                      (0, n.jsxs)(m.e, {
                                          size: "md",
                                          wrap: !1,
                                          className: b.CA,
                                          children: [
                                              (0, n.jsx)(g.$, {
                                                  variant: "primary",
                                                  minWidth: 60,
                                                  text: T.intl.string(N ? T.t.t5VZ88 : T.t.OpuAlK),
                                                  onClick: B,
                                              }),
                                              (0, n.jsx)(g.$, {
                                                  variant: "secondary",
                                                  minWidth: 60,
                                                  text: T.intl.string(C.default.bsDgiq),
                                                  onClick: E,
                                                  loading: k,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: T.intl.format(C.default.lTtxBT, { time: (0, f.ho)(v) }),
                              }),
                          ],
                      })
                    : k
                      ? (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            role: "status",
                            children: T.intl.string(C.default.c3R8Tx),
                        })
                      : null,
                w
                    ? (0, n.jsxs)(r.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "space-between",
                          gap: 12,
                          children: [
                              (0, n.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: T.intl.string(C.default.QJKw6N),
                              }),
                              (0, n.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: T.intl.string(C.default["7xdKYd"]),
                                  onClick: () => {
                                      y(!1);
                                  },
                                  loading: k,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
