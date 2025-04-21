t.d(s, { default: () => A }), t(388685);
var l = t(200651),
    r = t(192379),
    a = t(120356),
    n = t.n(a),
    u = t(442837),
    c = t(481060),
    i = t(24124),
    o = t(461745),
    d = t(212819),
    h = t(43267),
    m = t(447003),
    _ = t(933557),
    x = t(606206),
    p = t(592125),
    N = t(944486),
    g = t(585483),
    k = t(5192),
    C = t(51144),
    v = t(981631),
    S = t(388032),
    E = t(944801),
    j = t(20493);
function L(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
let b = (e) => {
        let { channel: s, categoryName: t, guildName: r } = e,
            a = c.VL1;
        return (
            (0, m.Z)(s) ? (a = c.W4G) : s.isNSFW() && (a = c.z0B),
            (0, l.jsxs)('div', {
                className: E.result,
                children: [
                    (0, l.jsx)(a, {
                        className: E.resultIcon,
                        colorClass: E.resultIconBackground,
                        size: 'xs'
                    }),
                    (0, l.jsxs)('div', {
                        className: E.resultText,
                        children: [
                            (0, l.jsx)('span', { children: s.name }),
                            (0, l.jsx)('span', {
                                className: E.resultCategoryName,
                                children: t
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: E.resultGuildName,
                        children: r
                    })
                ]
            })
        );
    },
    f = (e) => {
        let { channel: s } = e,
            t = (0, _.ZP)(s);
        return (0, l.jsxs)('div', {
            className: E.result,
            children: [
                (0, l.jsx)(c.qEK, {
                    src: (0, h.x)(s),
                    'aria-label': null != t ? t : '',
                    className: E.resultAvatar,
                    size: c.EFr.SIZE_32
                }),
                (0, l.jsx)('div', {
                    className: E.resultText,
                    children: t
                })
            ]
        });
    },
    R = (e) => {
        let { user: s, status: t } = e,
            r = (0, u.e7)([N.Z, p.Z], () => {
                var e;
                let s = null != (e = N.Z.getVoiceChannelId()) ? e : N.Z.getChannelId();
                return null == s ? null : p.Z.getChannel(s);
            }),
            a = null == r ? void 0 : r.guild_id,
            n = null == r ? void 0 : r.id,
            i = k.ZP.useName(a, n, s),
            o = C.ZP.useName(s);
        return (0, l.jsxs)('div', {
            className: E.result,
            children: [
                (0, l.jsx)(c.qEK, {
                    src: s.getAvatarURL(void 0, 32),
                    'aria-label': s.username,
                    className: E.resultAvatar,
                    size: c.EFr.SIZE_32,
                    status: t
                }),
                (0, l.jsxs)('div', {
                    className: E.resultText,
                    children: [
                        (0, l.jsx)('span', { children: i }),
                        (0, l.jsx)('span', {
                            className: E.resultUsername,
                            children: o
                        })
                    ]
                })
            ]
        });
    };
class z extends r.Component {
    render() {
        let e,
            s,
            { result: t, selected: r, sending: a } = this.props;
        switch (t.type) {
            case d.h8.GROUP_DM:
                e = (0, l.jsx)(f, { channel: t.data.record });
                break;
            case d.h8.TEXT_CHANNEL: {
                let { categoryName: s, guildName: r } = t;
                e = (0, l.jsx)(b, {
                    channel: t.data.record,
                    categoryName: s,
                    guildName: r
                });
                break;
            }
            case d.h8.USER: {
                let {
                    data: { comparator: s, record: r },
                    status: a
                } = t;
                e = (0, l.jsx)(R, {
                    comparator: s,
                    user: r,
                    status: a
                });
            }
        }
        return (
            (s = t.sent
                ? (0, l.jsx)(c.zxk, {
                      className: E.inviteButton,
                      look: c.zxk.Looks.LINK,
                      size: c.zxk.Sizes.SMALL,
                      disabled: !0,
                      color: c.zxk.Colors.WHITE,
                      children: S.intl.string(S.t.i6A1X1)
                  })
                : (0, l.jsx)(c.zxk, {
                      color: c.zxk.Colors.GREEN,
                      look: r ? c.zxk.Looks.FILLED : c.zxk.Looks.OUTLINED,
                      className: E.inviteButton,
                      size: c.zxk.Sizes.SMALL,
                      submitting: a,
                      children: S.intl.string(S.t['6F9ivr'])
                  })),
            (0, l.jsxs)(c.P3F, {
                className: n()(E.resultWrapper, { [E.resultWrapperSelected]: r }),
                onMouseEnter: this.handleMouseEnter,
                onClick: this.handleClick,
                children: [e, s]
            })
        );
    }
    constructor(...e) {
        super(...e),
            L(this, 'handleClick', () => {
                let { onInvite: e, row: s } = this.props;
                e(s);
            }),
            L(this, 'handleMouseEnter', () => {
                let { onMouseEnter: e, row: s } = this.props;
                e(s);
            });
    }
}
function A(e) {
    let { transitionState: s, onClose: t } = e,
        {
            results: a,
            query: n,
            activity: h
        } = (0, u.cj)(
            [x.Z],
            () => ({
                results: x.Z.getResults(),
                query: x.Z.getQuery(),
                activity: x.Z.getActivity()
            }),
            []
        ),
        [m, _] = r.useState(n),
        [p, N] = r.useState(0),
        [k, C] = r.useState([]),
        [L, b] = r.useState(!1),
        f = r.useRef(null),
        R = r.useCallback(() => {
            var e;
            null == (e = f.current) || e.scrollPageUp({ animate: !0 });
        }, [f]),
        A = r.useCallback(() => {
            var e;
            null == (e = f.current) || e.scrollPageDown({ animate: !0 });
        }, [f]);
    r.useEffect(
        () => (
            g.S.subscribe(v.CkL.SCROLL_PAGE_UP, R),
            () => {
                g.S.unsubscribe(v.CkL.SCROLL_PAGE_UP, R);
            }
        ),
        [R]
    ),
        r.useEffect(
            () => (
                g.S.subscribe(v.CkL.SCROLL_PAGE_DOWN, A),
                () => {
                    g.S.unsubscribe(v.CkL.SCROLL_PAGE_DOWN, A);
                }
            ),
            [A]
        ),
        r.useEffect(() => {
            null == h && t();
        }, [t, h]),
        r.useEffect(() => {
            var e;
            null == (e = f.current) || e.scrollToTop(), N(0);
        }, [f, a]);
    let I = r.useCallback(
            (e) => {
                let {
                    data: s,
                    data: {
                        record: { id: t }
                    }
                } = a[e];
                if (!(null == t || k.includes(t)))
                    switch ((C([...k, t]), s.type)) {
                        case d.h8.GROUP_DM:
                        case d.h8.TEXT_CHANNEL:
                            (0, i.GG)(s.record.id);
                            break;
                        case d.h8.USER:
                            (0, i.R2)(s.record.id);
                    }
            },
            [a, k]
        ),
        P = r.useCallback(
            (e) => {
                N(e);
            },
            [N]
        ),
        T = () => {
            Z('');
        },
        Z = (e) => {
            _(e), (0, i.rh)(e);
        };
    return null == h
        ? null
        : (0, l.jsxs)(c.Y0X, {
              transitionState: s,
              size: c.CgR.SMALL,
              'aria-label': S.intl.formatToPlainString(S.t['2tN7io'], { name: h.name }),
              children: [
                  (0, l.jsxs)(c.xBx, {
                      separator: L,
                      className: E.modalHeader,
                      children: [
                          (0, l.jsx)(c.olH, {
                              className: E.closeButton,
                              onClick: t
                          }),
                          (0, l.jsxs)('div', {
                              className: E.header,
                              children: [
                                  (0, l.jsx)(c.vwX, {
                                      tag: 'h2',
                                      className: j.marginBottom8,
                                      children: S.intl.format(S.t['2tN7io'], { name: h.name })
                                  }),
                                  (0, l.jsx)(o.ZP, {
                                      size: o.ZP.Sizes.MEDIUM,
                                      query: m,
                                      selectedSection: 0,
                                      selectedRow: p,
                                      sections: [a.length],
                                      className: j.marginTop4,
                                      onSelect: (e, s) => {
                                          null == s ? T() : I(s);
                                      },
                                      onSelectionChange: (e, s) => {
                                          var t;
                                          N(s),
                                              null == (t = f.current) ||
                                                  t.scrollIntoViewRect({
                                                      start: 48 * s,
                                                      end: 48 * s + 48
                                                  });
                                      },
                                      onQueryChange: Z,
                                      placeholder: S.intl.string(S.t.IJExws),
                                      autoFocus: !0,
                                      onClear: T
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, l.jsx)(c.YAO, {
                      scrollerRef: f,
                      className: 0 === a.length ? E.noResults : E.results,
                      paddingBottom: 12,
                      sections: [a.length],
                      sectionHeight: 0,
                      renderSection: v.VqG,
                      rowHeight: (e, s) => (e > 0 ? 0 : 48 * (null != a[s])),
                      renderRow: (e) => {
                          let { section: s, row: t } = e;
                          if (s > 0) return null;
                          let r = a[t];
                          return null == r
                              ? null
                              : (0, l.jsx)(
                                    z,
                                    {
                                        row: t,
                                        result: r,
                                        sending: null != r.data.record.id && k.includes(r.data.record.id),
                                        selected: t === p,
                                        onMouseEnter: P,
                                        onInvite: I
                                    },
                                    r.data.record.id
                                );
                      },
                      onScroll: (e) => {
                          let s = e.currentTarget.scrollTop > 0;
                          L !== s && b(s);
                      }
                  })
              ]
          });
}
