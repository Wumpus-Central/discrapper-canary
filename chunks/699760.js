i.d(e, { default: () => b });
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
    f = i(712808);
let p = { setTimeout: (t, e) => setTimeout(t, e), clearTimeout: (t) => clearTimeout(t), now: () => Date.now() };
class C {
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
var j = i(248675),
    v = i(375708),
    T = i(913879);
function b(t) {
    let { projectId: e, transitionState: i, onClose: p } = t,
        {
            connection: b,
            loading: k,
            failed: w,
            mint: y,
        } = (function (t) {
            let [e, i] = l.useState({ connection: null, loading: !0, failed: !1 }),
                n = l.useRef(null);
            l.useEffect(() => {
                let e = new C((e) => (0, f.y_)(t, { regenerate: e }), i);
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
        [S, B] = l.useState(null),
        N = null != b && S === b.url,
        z = l.useCallback(() => {
            if (null == b) return;
            let { url: t } = b;
            (0, x.C)(t, () => B(t));
        }, [b]),
        A = l.useCallback(() => {
            (0, s.A)({
                title: v.intl.string(j.default.avUWNd),
                subtitle: v.intl.string(j.default.YSh8bL),
                confirmText: v.intl.string(j.default.Ise9RO),
                variant: "critical",
                onConfirm: () => {
                    y(!0);
                },
            });
        }, [y]),
        E = v.intl.string(j.default["7937yd"]);
    return (0, n.jsx)(a.d, {
        transitionState: i,
        onClose: p,
        "aria-label": E,
        size: "md",
        children: (0, n.jsxs)(r.B, {
            gap: 24,
            padding: { top: 16, right: 24, bottom: 8, left: 24 },
            className: T.GV,
            children: [
                (0, n.jsx)("div", {
                    className: T.b,
                    children: (0, n.jsx)(c.K, {
                        "aria-label": v.intl.string(v.t.cpT0Cq),
                        icon: o.P,
                        onClick: p,
                        variant: "secondary",
                        size: "sm",
                    }),
                }),
                (0, n.jsxs)(r.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(d.D, { variant: "heading-lg/semibold", color: "text-strong", children: E }),
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: v.intl.string(j.default.WltAg2),
                        }),
                    ],
                }),
                null != b
                    ? (0, n.jsxs)(r.B, {
                          gap: 8,
                          children: [
                              (0, n.jsxs)(r.B, {
                                  direction: "horizontal",
                                  align: "end",
                                  gap: 8,
                                  className: T._T,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: T.UQ,
                                          children: (0, n.jsx)(h.k, {
                                              label: v.intl.string(j.default.UCwV3L),
                                              value: b.url,
                                              readOnly: !0,
                                              fullWidth: !0,
                                              onFocus: (t) => t.currentTarget.select(),
                                          }),
                                      }),
                                      (0, n.jsxs)(m.e, {
                                          size: "md",
                                          wrap: !1,
                                          className: T.CA,
                                          children: [
                                              (0, n.jsx)(g.$, {
                                                  variant: "primary",
                                                  minWidth: 60,
                                                  text: v.intl.string(N ? v.t.t5VZ88 : v.t.OpuAlK),
                                                  onClick: z,
                                              }),
                                              (0, n.jsx)(g.$, {
                                                  variant: "secondary",
                                                  minWidth: 60,
                                                  text: v.intl.string(j.default.FBKOBq),
                                                  onClick: A,
                                                  loading: k,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: v.intl.format(j.default.EQ8k1i, { time: (0, f.ho)(b) }),
                              }),
                          ],
                      })
                    : k
                      ? (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            role: "status",
                            children: v.intl.string(j.default.Q6xQTM),
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
                                  children: v.intl.string(j.default.IAF2eN),
                              }),
                              (0, n.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: v.intl.string(j.default["eHMX/v"]),
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
