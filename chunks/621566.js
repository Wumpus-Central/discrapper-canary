r.d(t, { default: () => E }), r(388685);
var s = r(951288),
    l = r(647438),
    n = r(793030),
    a = r(442837),
    i = r(481060),
    u = r(24124),
    c = r(700582),
    d = r(212819),
    o = r(933557),
    h = r(266076),
    m = r(810123),
    x = r(448486),
    f = r(606206),
    g = r(430824),
    p = r(699516),
    _ = r(585483),
    j = r(51144),
    v = r(981631),
    T = r(388032),
    P = r(559577);
let S = (e) => {
        let { channel: t, guildName: r } = e,
            l = (0, a.e7)([g.Z], () => g.Z.getGuild(t.guild_id)),
            n = (0, o.ZP)(t);
        return (0, s.jsxs)("div", {
            className: P.result,
            children: [
                (0, s.jsx)(m.Z, {
                    size: m.E.SMALL_32,
                    guild: l,
                    channel: t,
                }),
                (0, s.jsxs)("div", {
                    className: P.resultText,
                    children: [
                        (0, s.jsx)(i.Text, {
                            variant: "text-md/medium",
                            children: n,
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: r,
                        }),
                    ],
                }),
            ],
        });
    },
    b = (e) => {
        let { channel: t } = e,
            r = (0, o.ZP)(t),
            l = (0, x._)(t);
        return (0, s.jsxs)("div", {
            className: P.result,
            children: [
                (0, s.jsx)(h.Z, {
                    "aria-hidden": !0,
                    size: i.EFr.SIZE_32,
                    channel: t,
                }),
                (0, s.jsxs)("div", {
                    className: P.resultText,
                    children: [
                        (0, s.jsx)(i.Text, {
                            variant: "text-md/medium",
                            children: r,
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: l,
                        }),
                    ],
                }),
            ],
        });
    },
    C = (e) => {
        let { user: t, status: r } = e,
            l = (0, a.e7)([p.Z], () => p.Z.getNickname(t.id)),
            n = j.ZP.useName(t),
            u = j.ZP.useUserTag(t);
        return (0, s.jsxs)("div", {
            className: P.result,
            children: [
                (0, s.jsx)(c.Z, {
                    "aria-hidden": !0,
                    size: i.EFr.SIZE_32,
                    user: t,
                    status: r,
                }),
                (0, s.jsxs)("div", {
                    className: P.resultText,
                    children: [
                        (0, s.jsx)(i.Text, {
                            variant: "text-md/medium",
                            children: null != l ? l : n,
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: u,
                        }),
                    ],
                }),
            ],
        });
    };
class N extends l.Component {
    render() {
        let e,
            t,
            { result: r, sending: l } = this.props;
        switch (r.type) {
            case d.h8.GROUP_DM:
                e = (0, s.jsx)(b, { channel: r.data.record });
                break;
            case d.h8.TEXT_CHANNEL: {
                let { categoryName: t, guildName: l } = r;
                e = (0, s.jsx)(S, {
                    channel: r.data.record,
                    categoryName: t,
                    guildName: l,
                });
                break;
            }
            case d.h8.USER: {
                let {
                    data: { comparator: t, record: l },
                    status: n,
                } = r;
                e = (0, s.jsx)(C, {
                    comparator: t,
                    user: l,
                    status: n,
                });
            }
        }
        return (
            (t = r.sent
                ? (0, s.jsx)(i.Button, {
                      variant: "secondary",
                      text: T.intl.string(T.t.i6A1Xw),
                      size: "sm",
                      disabled: !0,
                  })
                : (0, s.jsx)(i.Button, {
                      variant: "secondary",
                      text: T.intl.string(T.t["6F9ivu"]),
                      size: "sm",
                      loading: l,
                  })),
            (0, s.jsxs)(i.P3F, {
                className: P.resultWrapper,
                onClick: this.handleClick,
                children: [e, t],
            })
        );
    }
    constructor(...e) {
        super(...e),
            (function (e, t, r) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = r);
            })(this, "handleClick", () => {
                let { onInvite: e, row: t } = this.props;
                e(t);
            });
    }
}
function E(e) {
    let { transitionState: t, onClose: r } = e,
        {
            results: c,
            query: o,
            activity: h,
        } = (0, a.cj)(
            [f.Z],
            () => ({
                results: f.Z.getResults(),
                query: f.Z.getQuery(),
                activity: f.Z.getActivity(),
            }),
            [],
        ),
        [m, x] = l.useState(o),
        [g, p] = l.useState([]),
        [j, S] = l.useState(!1),
        b = l.useRef(null),
        C = l.useCallback(() => {
            var e;
            null == (e = b.current) || e.scrollPageUp({ animate: !0 });
        }, [b]),
        E = l.useCallback(() => {
            var e;
            null == (e = b.current) || e.scrollPageDown({ animate: !0 });
        }, [b]);
    l.useEffect(
        () => (
            _.S.subscribe(v.CkL.SCROLL_PAGE_UP, C),
            () => {
                _.S.unsubscribe(v.CkL.SCROLL_PAGE_UP, C);
            }
        ),
        [C],
    ),
        l.useEffect(
            () => (
                _.S.subscribe(v.CkL.SCROLL_PAGE_DOWN, E),
                () => {
                    _.S.unsubscribe(v.CkL.SCROLL_PAGE_DOWN, E);
                }
            ),
            [E],
        ),
        l.useEffect(() => {
            null == h && r();
        }, [r, h]),
        l.useEffect(() => {
            var e;
            null == (e = b.current) || e.scrollToTop();
        }, [b, c]);
    let k = l.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: r },
                    },
                } = c[e];
                if (!(null == r || g.includes(r)))
                    switch ((p([...g, r]), t.type)) {
                        case d.h8.GROUP_DM:
                        case d.h8.TEXT_CHANNEL:
                            (0, u.GG)(t.record.id);
                            break;
                        case d.h8.USER:
                            (0, u.R2)(t.record.id);
                    }
            },
            [c, g],
        ),
        Z = (e) => {
            x(e), (0, u.rh)(e);
        };
    return null == h
        ? null
        : (0, s.jsx)(n.Modal, {
              transitionState: t,
              title: T.intl.formatToPlainString(T.t["2tN7ih"], { name: h.name }),
              onClose: r,
              actions: [],
              input: (0, s.jsx)(i.E1j, {
                  query: m,
                  onChange: Z,
                  placeholder: T.intl.string(T.t["5h0QOP"]),
                  autoFocus: !0,
                  onClear: () => {
                      Z("");
                  },
              }),
              size: "md",
              "aria-label": T.intl.formatToPlainString(T.t["2tN7ih"], { name: h.name }),
              children: (0, s.jsx)(i.YAO, {
                  scrollerRef: b,
                  className: 0 === c.length ? P.noResults : P.results,
                  paddingBottom: 12,
                  sections: [c.length],
                  sectionHeight: 0,
                  renderSection: v.VqG,
                  rowHeight: (e, t) => (e > 0 ? 0 : 48 * (null != c[t])),
                  renderRow: (e) => {
                      let { section: t, row: r } = e;
                      if (t > 0) return null;
                      let l = c[r];
                      return null == l
                          ? null
                          : (0, s.jsx)(
                                N,
                                {
                                    row: r,
                                    result: l,
                                    sending: null != l.data.record.id && g.includes(l.data.record.id),
                                    onInvite: k,
                                },
                                l.data.record.id,
                            );
                  },
                  onScroll: (e) => {
                      let t = e.currentTarget.scrollTop > 0;
                      j !== t && S(t);
                  },
              }),
          });
}
