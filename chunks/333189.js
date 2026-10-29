s.d(t, { default: () => T });
var n = s(477900),
    r = s(582128),
    i = s(17928),
    a = s(189213),
    l = s(834730),
    c = s(778712),
    d = s(821609),
    u = s(939249),
    o = s(683438),
    x = s(298990),
    h = s(966327),
    m = s(775602),
    j = s(115718),
    A = s(47167),
    E = s(598104),
    f = s(255266),
    g = s(72563),
    p = s(921955),
    b = s(71393),
    _ = s(994500),
    v = s(625494),
    N = s(427262),
    D = s(652215),
    y = s(105292),
    C = s(915822);
function R(e) {
    let { channel: t, guildName: s } = e,
        r = (0, i.bG)([b.A], () => b.A.getGuild(t.guild_id)),
        a = (0, A.Ay)(t);
    return (0, n.jsxs)("div", {
        className: C.Ke,
        children: [
            (0, n.jsx)(f.A, { size: f.q.SMALL_32, guild: r, channel: t }),
            (0, n.jsxs)("div", {
                className: C.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "text-md/medium", children: a }),
                    (0, n.jsx)(l.E, { variant: "text-xs/normal", children: s }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { channel: t } = e,
        s = (0, A.Ay)(t),
        r = (0, g.i)(t);
    return (0, n.jsxs)("div", {
        className: C.Ke,
        children: [
            (0, n.jsx)(E.A, { "aria-hidden": !0, size: c._3.SIZE_32, channel: t }),
            (0, n.jsxs)("div", {
                className: C.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "text-md/medium", children: s }),
                    (0, n.jsx)(l.E, { variant: "text-xs/normal", children: r }),
                ],
            }),
        ],
    });
}
function k(e) {
    let { user: t, status: s } = e,
        r = (0, i.bG)([_.A], () => _.A.getNickname(t.id)),
        a = N.Ay.useName(t),
        d = N.Ay.useUserTag(t);
    return (0, n.jsxs)("div", {
        className: C.Ke,
        children: [
            (0, n.jsx)(h.A, { "aria-hidden": !0, size: c._3.SIZE_32, user: t, status: s }),
            (0, n.jsxs)("div", {
                className: C.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "text-md/medium", children: r ?? a }),
                    (0, n.jsx)(l.E, { variant: "text-xs/normal", children: d }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { text: t } = e;
    return (0, n.jsx)("div", {
        className: C.bV,
        children: (0, n.jsx)(l.E, { variant: "text-xs/semibold", color: "text-muted", children: t }),
    });
}
class L extends r.Component {
    handleClick = () => {
        let { onInvite: e, row: t } = this.props;
        e(t);
    };
    render() {
        let e,
            t,
            { result: s, sending: r } = this.props;
        switch (s.type) {
            case j.rD.GROUP_DM:
                e = (0, n.jsx)(S, { channel: s.data.record });
                break;
            case j.rD.TEXT_CHANNEL: {
                let { categoryName: t, guildName: r } = s;
                e = (0, n.jsx)(R, { channel: s.data.record, categoryName: t, guildName: r });
                break;
            }
            case j.rD.USER: {
                let {
                    data: { comparator: t, record: r },
                    status: i,
                } = s;
                e = (0, n.jsx)(k, { comparator: t, user: r, status: i });
            }
        }
        return (
            (t = s.sent
                ? (0, n.jsx)(d.$, { variant: "secondary", text: y.intl.string(y.t.i6A1Xw), size: "sm", disabled: !0 })
                : (0, n.jsx)(d.$, {
                      variant: "secondary",
                      text: y.intl.string(y.t["6F9ivu"]),
                      size: "sm",
                      loading: r,
                  })),
            (0, n.jsxs)(u.D, { className: C.Nn, onClick: this.handleClick, children: [e, t] })
        );
    }
}
function T(e) {
    let { transitionState: t, onClose: s } = e,
        {
            results: l,
            query: c,
            activity: d,
        } = (0, i.cf)(
            [p.A],
            () => ({ results: p.A.getResults(), query: p.A.getQuery(), activity: p.A.getActivity() }),
            [],
        ),
        [u, h] = r.useState(c),
        [A, E] = r.useState([]),
        [f, g] = r.useState(!1),
        b = r.useRef(null),
        _ = r.useCallback(() => {
            b.current?.scrollPageUp({ animate: !m.Ay.useReducedMotion });
        }, [b]),
        N = r.useCallback(() => {
            b.current?.scrollPageDown({ animate: !m.Ay.useReducedMotion });
        }, [b]);
    (r.useEffect(
        () => (
            v._.subscribe(D.jej.SCROLL_PAGE_UP, _),
            () => {
                v._.unsubscribe(D.jej.SCROLL_PAGE_UP, _);
            }
        ),
        [_],
    ),
        r.useEffect(
            () => (
                v._.subscribe(D.jej.SCROLL_PAGE_DOWN, N),
                () => {
                    v._.unsubscribe(D.jej.SCROLL_PAGE_DOWN, N);
                }
            ),
            [N],
        ),
        r.useEffect(() => {
            null == d && s();
        }, [s, d]),
        r.useEffect(() => {
            b.current?.scrollToTop();
        }, [b, c]));
    let R = r.useCallback(
        (e) => {
            let t = l[e];
            if (null == t || t.type === j.rD.HEADER) return;
            let {
                data: s,
                data: {
                    record: { id: n },
                },
            } = t;
            if (!(null == n || A.includes(n)))
                switch ((E([...A, n]), s.type)) {
                    case j.rD.GROUP_DM:
                    case j.rD.TEXT_CHANNEL:
                        (0, x.b4)(s.record.id);
                        break;
                    case j.rD.USER:
                        (0, x.Jb)(s.record.id);
                }
        },
        [l, A],
    );
    function S(e) {
        (h(e), (0, x.oR)(e));
    }
    return null == d
        ? null
        : (0, n.jsx)(a.a, {
              transitionState: t,
              title: y.intl.formatToPlainString(y.t["2tN7ih"], { name: d.name }),
              onClose: s,
              actions: [],
              input: (0, n.jsx)(o.I, {
                  query: u,
                  onChange: S,
                  placeholder: y.intl.string(y.t["5h0QOP"]),
                  autoFocus: !0,
                  onClear: function () {
                      S("");
                  },
              }),
              size: "md",
              "aria-label": y.intl.formatToPlainString(y.t["2tN7ih"], { name: d.name }),
              listProps:
                  l.length > 0
                      ? {
                            ref: b,
                            paddingBottom: 12,
                            sections: [l.length],
                            sectionHeight: 0,
                            renderSection: D.FXj,
                            rowHeight: function (e, t) {
                                if (e > 0) return 0;
                                let s = l[t];
                                return null == s ? 0 : s.type === j.rD.HEADER ? 32 : 48;
                            },
                            renderRow: function (e) {
                                let { section: t, row: s } = e;
                                if (t > 0) return null;
                                let r = l[s];
                                return null == r
                                    ? null
                                    : r.type === j.rD.HEADER
                                      ? (0, n.jsx)(P, { text: r.data.record.text }, r.data.record.id)
                                      : (0, n.jsx)(
                                            L,
                                            {
                                                row: s,
                                                result: r,
                                                sending: null != r.data.record.id && A.includes(r.data.record.id),
                                                onInvite: R,
                                            },
                                            r.data.record.id,
                                        );
                            },
                            onScroll: function (e) {
                                let t = e.currentTarget.scrollTop > 0;
                                f !== t && g(t);
                            },
                        }
                      : void 0,
              children: 0 === l.length && (0, n.jsx)("div", { className: C.wV }),
          });
}
