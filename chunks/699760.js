i.d(e, { default: () => T });
var n = i(477900),
    l = i(582128),
    s = i(314116),
    a = i(224640),
    r = i(331322),
    o = i(408278),
    c = i(789645),
    d = i(534514),
    u = i(834730),
    h = i(95477),
    m = i(825484),
    g = i(821609),
    f = i(957565),
    x = i(860402);
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
var b = i(809526),
    j = i(105292),
    v = i(913879);
function T(t) {
    let { projectId: e, transitionState: i, onClose: p } = t,
        {
            connection: T,
            loading: k,
            failed: y,
            mint: w,
        } = (function (t) {
            let [e, i] = l.useState({ connection: null, loading: !0, failed: !1 }),
                n = l.useRef(null);
            l.useEffect(() => {
                let e = new C((e) => (0, x.y_)(t, { regenerate: e }), i);
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
        N = null != T && S === T.url,
        z = l.useCallback(() => {
            if (null == T) return;
            let { url: t } = T;
            (0, f.C)(t, () => B(t));
        }, [T]),
        A = l.useCallback(() => {
            (0, s.A)({
                title: j.intl.string(b.default.avUWNd),
                subtitle: j.intl.string(b.default.YSh8bL),
                confirmText: j.intl.string(b.default.Ise9RO),
                variant: "critical",
                onConfirm: () => {
                    w(!0);
                },
            });
        }, [w]),
        E = j.intl.string(b.default["7937yd"]);
    return (0, n.jsx)(a.d, {
        transitionState: i,
        onClose: p,
        "aria-label": E,
        size: "md",
        children: (0, n.jsxs)(r.B, {
            gap: 24,
            padding: { top: 16, right: 24, bottom: 8, left: 24 },
            className: v.GV,
            children: [
                (0, n.jsx)("div", {
                    className: v.b,
                    children: (0, n.jsx)(o.K, {
                        "aria-label": j.intl.string(j.t.cpT0Cq),
                        icon: c.P,
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
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: j.intl.string(b.default.WltAg2),
                        }),
                    ],
                }),
                null != T
                    ? (0, n.jsxs)(r.B, {
                          gap: 8,
                          children: [
                              (0, n.jsxs)(r.B, {
                                  direction: "horizontal",
                                  align: "end",
                                  gap: 8,
                                  className: v._T,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: v.UQ,
                                          children: (0, n.jsx)(h.k, {
                                              label: j.intl.string(b.default.UCwV3L),
                                              value: T.url,
                                              readOnly: !0,
                                              fullWidth: !0,
                                              onFocus: (t) => t.currentTarget.select(),
                                          }),
                                      }),
                                      (0, n.jsxs)(m.e, {
                                          size: "md",
                                          wrap: !1,
                                          className: v.CA,
                                          children: [
                                              (0, n.jsx)(g.$, {
                                                  variant: "primary",
                                                  minWidth: 60,
                                                  text: j.intl.string(N ? j.t.t5VZ88 : j.t.OpuAlK),
                                                  onClick: z,
                                              }),
                                              (0, n.jsx)(g.$, {
                                                  variant: "secondary",
                                                  minWidth: 60,
                                                  text: j.intl.string(b.default.FBKOBq),
                                                  onClick: A,
                                                  loading: k,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(u.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: j.intl.format(b.default.EQ8k1i, { time: (0, x.ho)(T) }),
                              }),
                          ],
                      })
                    : k
                      ? (0, n.jsx)(u.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            role: "status",
                            children: j.intl.string(b.default.Q6xQTM),
                        })
                      : null,
                y
                    ? (0, n.jsxs)(r.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "space-between",
                          gap: 12,
                          children: [
                              (0, n.jsx)(u.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: j.intl.string(b.default.IAF2eN),
                              }),
                              (0, n.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: j.intl.string(b.default["eHMX/v"]),
                                  onClick: () => {
                                      w(!1);
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
