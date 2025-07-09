(t.d(s, { default: () => I }), t(388685));
var l = t(255367),
    r = t(73800),
    a = t(120356),
    n = t.n(a),
    u = t(442837),
    c = t(755721),
    i = t(481060),
    o = t(24124),
    d = t(461745),
    h = t(212819),
    m = t(43267),
    _ = t(447003),
    x = t(933557),
    p = t(606206),
    N = t(592125),
    g = t(944486),
    v = t(585483),
    C = t(5192),
    S = t(51144),
    E = t(981631),
    j = t(388032),
    L = t(944801),
    k = t(20493);
function b(e, s, t) {
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
let f = (e) => {
        let { channel: s, categoryName: t, guildName: r } = e,
            a = i.VL1;
        return (
            (0, _.Z)(s) ? (a = i.W4G) : s.isNSFW() && (a = i.z0B),
            (0, l.jsxs)('div', {
                className: L.result,
                children: [
                    (0, l.jsx)(a, {
                        className: L.resultIcon,
                        colorClass: L.resultIconBackground,
                        size: 'xs'
                    }),
                    (0, l.jsxs)('div', {
                        className: L.resultText,
                        children: [
                            (0, l.jsx)('span', { children: s.name }),
                            (0, l.jsx)('span', {
                                className: L.resultCategoryName,
                                children: t
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: L.resultGuildName,
                        children: r
                    })
                ]
            })
        );
    },
    R = (e) => {
        let { channel: s } = e,
            t = (0, x.ZP)(s);
        return (0, l.jsxs)('div', {
            className: L.result,
            children: [
                (0, l.jsx)(i.qEK, {
                    src: (0, m.x)(s),
                    'aria-label': null != t ? t : '',
                    className: L.resultAvatar,
                    size: i.EFr.SIZE_32
                }),
                (0, l.jsx)('div', {
                    className: L.resultText,
                    children: t
                })
            ]
        });
    },
    z = (e) => {
        let { user: s, status: t } = e,
            r = (0, u.e7)([g.Z, N.Z], () => {
                var e;
                let s = null != (e = g.Z.getVoiceChannelId()) ? e : g.Z.getChannelId();
                return null == s ? null : N.Z.getChannel(s);
            }),
            a = null == r ? void 0 : r.guild_id,
            n = null == r ? void 0 : r.id,
            c = C.ZP.useName(a, n, s),
            o = S.ZP.useName(s);
        return (0, l.jsxs)('div', {
            className: L.result,
            children: [
                (0, l.jsx)(i.qEK, {
                    src: s.getAvatarURL(void 0, 32),
                    'aria-label': s.username,
                    className: L.resultAvatar,
                    size: i.EFr.SIZE_32,
                    status: t
                }),
                (0, l.jsxs)('div', {
                    className: L.resultText,
                    children: [
                        (0, l.jsx)('span', { children: c }),
                        (0, l.jsx)('span', {
                            className: L.resultUsername,
                            children: o
                        })
                    ]
                })
            ]
        });
    };
class A extends r.Component {
    render() {
        let e,
            s,
            { result: t, selected: r, sending: a } = this.props;
        switch (t.type) {
            case h.h8.GROUP_DM:
                e = (0, l.jsx)(R, { channel: t.data.record });
                break;
            case h.h8.TEXT_CHANNEL: {
                let { categoryName: s, guildName: r } = t;
                e = (0, l.jsx)(f, {
                    channel: t.data.record,
                    categoryName: s,
                    guildName: r
                });
                break;
            }
            case h.h8.USER: {
                let {
                    data: { comparator: s, record: r },
                    status: a
                } = t;
                e = (0, l.jsx)(z, {
                    comparator: s,
                    user: r,
                    status: a
                });
            }
        }
        return (
            (s = t.sent
                ? (0, l.jsx)(c.zx, {
                      className: L.inviteButton,
                      look: c.zx.Looks.LINK,
                      size: c.zx.Sizes.SMALL,
                      disabled: !0,
                      color: c.zx.Colors.WHITE,
                      children: j.intl.string(j.t.i6A1X1)
                  })
                : (0, l.jsx)(c.zx, {
                      color: c.zx.Colors.GREEN,
                      look: r ? c.zx.Looks.FILLED : c.zx.Looks.OUTLINED,
                      className: L.inviteButton,
                      size: c.zx.Sizes.SMALL,
                      submitting: a,
                      children: j.intl.string(j.t['6F9ivr'])
                  })),
            (0, l.jsxs)(i.P3F, {
                className: n()(L.resultWrapper, { [L.resultWrapperSelected]: r }),
                onMouseEnter: this.handleMouseEnter,
                onClick: this.handleClick,
                children: [e, s]
            })
        );
    }
    constructor(...e) {
        (super(...e),
            b(this, 'handleClick', () => {
                let { onInvite: e, row: s } = this.props;
                e(s);
            }),
            b(this, 'handleMouseEnter', () => {
                let { onMouseEnter: e, row: s } = this.props;
                e(s);
            }));
    }
}
function I(e) {
    let { transitionState: s, onClose: t } = e,
        {
            results: a,
            query: n,
            activity: c
        } = (0, u.cj)(
            [p.Z],
            () => ({
                results: p.Z.getResults(),
                query: p.Z.getQuery(),
                activity: p.Z.getActivity()
            }),
            []
        ),
        [m, _] = r.useState(n),
        [x, N] = r.useState(0),
        [g, C] = r.useState([]),
        [S, b] = r.useState(!1),
        f = r.useRef(null),
        R = r.useCallback(() => {
            var e;
            null == (e = f.current) || e.scrollPageUp({ animate: !0 });
        }, [f]),
        z = r.useCallback(() => {
            var e;
            null == (e = f.current) || e.scrollPageDown({ animate: !0 });
        }, [f]);
    (r.useEffect(
        () => (
            v.S.subscribe(E.CkL.SCROLL_PAGE_UP, R),
            () => {
                v.S.unsubscribe(E.CkL.SCROLL_PAGE_UP, R);
            }
        ),
        [R]
    ),
        r.useEffect(
            () => (
                v.S.subscribe(E.CkL.SCROLL_PAGE_DOWN, z),
                () => {
                    v.S.unsubscribe(E.CkL.SCROLL_PAGE_DOWN, z);
                }
            ),
            [z]
        ),
        r.useEffect(() => {
            null == c && t();
        }, [t, c]),
        r.useEffect(() => {
            var e;
            (null == (e = f.current) || e.scrollToTop(), N(0));
        }, [f, a]));
    let I = r.useCallback(
            (e) => {
                let {
                    data: s,
                    data: {
                        record: { id: t }
                    }
                } = a[e];
                if (!(null == t || g.includes(t)))
                    switch ((C([...g, t]), s.type)) {
                        case h.h8.GROUP_DM:
                        case h.h8.TEXT_CHANNEL:
                            (0, o.GG)(s.record.id);
                            break;
                        case h.h8.USER:
                            (0, o.R2)(s.record.id);
                    }
            },
            [a, g]
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
            (_(e), (0, o.rh)(e));
        };
    return null == c
        ? null
        : (0, l.jsxs)(i.Y0X, {
              transitionState: s,
              size: i.CgR.SMALL,
              'aria-label': j.intl.formatToPlainString(j.t['2tN7io'], { name: c.name }),
              parentComponent: 'ActivityInviteModal',
              children: [
                  (0, l.jsxs)(i.xBx, {
                      separator: S,
                      className: L.modalHeader,
                      children: [
                          (0, l.jsx)(i.olH, {
                              className: L.closeButton,
                              onClick: t
                          }),
                          (0, l.jsxs)('div', {
                              className: L.header,
                              children: [
                                  (0, l.jsx)(i.vwX, {
                                      tag: 'h2',
                                      className: k.marginBottom8,
                                      children: j.intl.format(j.t['2tN7io'], { name: c.name })
                                  }),
                                  (0, l.jsx)(d.ZP, {
                                      size: d.ZP.Sizes.MEDIUM,
                                      query: m,
                                      selectedSection: 0,
                                      selectedRow: x,
                                      sections: [a.length],
                                      className: k.marginTop4,
                                      onSelect: (e, s) => {
                                          null == s ? T() : I(s);
                                      },
                                      onSelectionChange: (e, s) => {
                                          var t;
                                          (N(s),
                                              null == (t = f.current) ||
                                                  t.scrollIntoViewRect({
                                                      start: 48 * s,
                                                      end: 48 * s + 48
                                                  }));
                                      },
                                      onQueryChange: Z,
                                      placeholder: j.intl.string(j.t.IJExws),
                                      autoFocus: !0,
                                      onClear: T
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, l.jsx)(i.YAO, {
                      scrollerRef: f,
                      className: 0 === a.length ? L.noResults : L.results,
                      paddingBottom: 12,
                      sections: [a.length],
                      sectionHeight: 0,
                      renderSection: E.VqG,
                      rowHeight: (e, s) => (e > 0 ? 0 : 48 * (null != a[s])),
                      renderRow: (e) => {
                          let { section: s, row: t } = e;
                          if (s > 0) return null;
                          let r = a[t];
                          return null == r
                              ? null
                              : (0, l.jsx)(
                                    A,
                                    {
                                        row: t,
                                        result: r,
                                        sending: null != r.data.record.id && g.includes(r.data.record.id),
                                        selected: t === x,
                                        onMouseEnter: P,
                                        onInvite: I
                                    },
                                    r.data.record.id
                                );
                      },
                      onScroll: (e) => {
                          let s = e.currentTarget.scrollTop > 0;
                          S !== s && b(s);
                      }
                  })
              ]
          });
}
