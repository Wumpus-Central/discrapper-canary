(t.d(s, { default: () => T }), t(388685));
var l = t(255367),
    r = t(73800),
    a = t(120356),
    n = t.n(a),
    u = t(442837),
    c = t(755721),
    i = t(481060),
    o = t(24124),
    d = t(794433),
    h = t(622822),
    m = t(212819),
    _ = t(43267),
    x = t(447003),
    p = t(933557),
    N = t(606206),
    g = t(592125),
    C = t(944486),
    v = t(585483),
    S = t(5192),
    E = t(51144),
    j = t(981631),
    L = t(388032),
    k = t(944801),
    b = t(20493);
function f(e, s, t) {
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
let R = (e) => {
        let { channel: s, categoryName: t, guildName: r } = e,
            a = i.VL1;
        return (
            (0, x.Z)(s) ? (a = i.W4G) : (0, h.aC)(s) && (a = i.z0B),
            (0, l.jsxs)('div', {
                className: k.result,
                children: [
                    (0, l.jsx)(a, {
                        className: k.resultIcon,
                        colorClass: k.resultIconBackground,
                        size: 'xs'
                    }),
                    (0, l.jsxs)('div', {
                        className: k.resultText,
                        children: [
                            (0, l.jsx)('span', { children: s.name }),
                            (0, l.jsx)('span', {
                                className: k.resultCategoryName,
                                children: t
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: k.resultGuildName,
                        children: r
                    })
                ]
            })
        );
    },
    z = (e) => {
        let { channel: s } = e,
            t = (0, p.ZP)(s);
        return (0, l.jsxs)('div', {
            className: k.result,
            children: [
                (0, l.jsx)(i.qEK, {
                    src: (0, _.x)(s),
                    'aria-label': null != t ? t : '',
                    className: k.resultAvatar,
                    size: i.EFr.SIZE_32
                }),
                (0, l.jsx)('div', {
                    className: k.resultText,
                    children: t
                })
            ]
        });
    },
    A = (e) => {
        let { user: s, status: t } = e,
            r = (0, u.e7)([C.Z, g.Z], () => {
                var e;
                let s = null != (e = C.Z.getVoiceChannelId()) ? e : C.Z.getChannelId();
                return null == s ? null : g.Z.getChannel(s);
            }),
            a = null == r ? void 0 : r.guild_id,
            n = null == r ? void 0 : r.id,
            c = S.ZP.useName(a, n, s),
            o = E.ZP.useName(s);
        return (0, l.jsxs)('div', {
            className: k.result,
            children: [
                (0, l.jsx)(i.qEK, {
                    src: s.getAvatarURL(void 0, 32),
                    'aria-label': s.username,
                    className: k.resultAvatar,
                    size: i.EFr.SIZE_32,
                    status: t
                }),
                (0, l.jsxs)('div', {
                    className: k.resultText,
                    children: [
                        (0, l.jsx)('span', { children: c }),
                        (0, l.jsx)('span', {
                            className: k.resultUsername,
                            children: o
                        })
                    ]
                })
            ]
        });
    };
class I extends r.Component {
    render() {
        let e,
            s,
            { result: t, selected: r, sending: a } = this.props;
        switch (t.type) {
            case m.h8.GROUP_DM:
                e = (0, l.jsx)(z, { channel: t.data.record });
                break;
            case m.h8.TEXT_CHANNEL: {
                let { categoryName: s, guildName: r } = t;
                e = (0, l.jsx)(R, {
                    channel: t.data.record,
                    categoryName: s,
                    guildName: r
                });
                break;
            }
            case m.h8.USER: {
                let {
                    data: { comparator: s, record: r },
                    status: a
                } = t;
                e = (0, l.jsx)(A, {
                    comparator: s,
                    user: r,
                    status: a
                });
            }
        }
        return (
            (s = t.sent
                ? (0, l.jsx)(c.zx, {
                      className: k.inviteButton,
                      look: c.zx.Looks.LINK,
                      size: c.zx.Sizes.SMALL,
                      disabled: !0,
                      color: c.zx.Colors.WHITE,
                      children: L.intl.string(L.t.i6A1X1)
                  })
                : (0, l.jsx)(c.zx, {
                      color: c.zx.Colors.GREEN,
                      look: r ? c.zx.Looks.FILLED : c.zx.Looks.OUTLINED,
                      className: k.inviteButton,
                      size: c.zx.Sizes.SMALL,
                      submitting: a,
                      children: L.intl.string(L.t['6F9ivr'])
                  })),
            (0, l.jsxs)(i.P3F, {
                className: n()(k.resultWrapper, { [k.resultWrapperSelected]: r }),
                onMouseEnter: this.handleMouseEnter,
                onClick: this.handleClick,
                children: [e, s]
            })
        );
    }
    constructor(...e) {
        (super(...e),
            f(this, 'handleClick', () => {
                let { onInvite: e, row: s } = this.props;
                e(s);
            }),
            f(this, 'handleMouseEnter', () => {
                let { onMouseEnter: e, row: s } = this.props;
                e(s);
            }));
    }
}
function T(e) {
    let { transitionState: s, onClose: t } = e,
        {
            results: a,
            query: n,
            activity: c
        } = (0, u.cj)(
            [N.Z],
            () => ({
                results: N.Z.getResults(),
                query: N.Z.getQuery(),
                activity: N.Z.getActivity()
            }),
            []
        ),
        [h, _] = r.useState(n),
        [x, p] = r.useState(0),
        [g, C] = r.useState([]),
        [S, E] = r.useState(!1),
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
            v.S.subscribe(j.CkL.SCROLL_PAGE_UP, R),
            () => {
                v.S.unsubscribe(j.CkL.SCROLL_PAGE_UP, R);
            }
        ),
        [R]
    ),
        r.useEffect(
            () => (
                v.S.subscribe(j.CkL.SCROLL_PAGE_DOWN, z),
                () => {
                    v.S.unsubscribe(j.CkL.SCROLL_PAGE_DOWN, z);
                }
            ),
            [z]
        ),
        r.useEffect(() => {
            null == c && t();
        }, [t, c]),
        r.useEffect(() => {
            var e;
            (null == (e = f.current) || e.scrollToTop(), p(0));
        }, [f, a]));
    let A = r.useCallback(
            (e) => {
                let {
                    data: s,
                    data: {
                        record: { id: t }
                    }
                } = a[e];
                if (!(null == t || g.includes(t)))
                    switch ((C([...g, t]), s.type)) {
                        case m.h8.GROUP_DM:
                        case m.h8.TEXT_CHANNEL:
                            (0, o.GG)(s.record.id);
                            break;
                        case m.h8.USER:
                            (0, o.R2)(s.record.id);
                    }
            },
            [a, g]
        ),
        T = r.useCallback(
            (e) => {
                p(e);
            },
            [p]
        ),
        Z = () => {
            P('');
        },
        P = (e) => {
            (_(e), (0, o.rh)(e));
        };
    return null == c
        ? null
        : (0, l.jsxs)(i.Y0X, {
              transitionState: s,
              size: i.CgR.SMALL,
              'aria-label': L.intl.formatToPlainString(L.t['2tN7io'], { name: c.name }),
              parentComponent: 'ActivityInviteModal',
              children: [
                  (0, l.jsxs)(i.xBx, {
                      separator: S,
                      className: k.modalHeader,
                      children: [
                          (0, l.jsx)(i.olH, {
                              className: k.closeButton,
                              onClick: t
                          }),
                          (0, l.jsxs)('div', {
                              className: k.header,
                              children: [
                                  (0, l.jsx)(i.vwX, {
                                      tag: 'h2',
                                      className: b.marginBottom8,
                                      children: L.intl.format(L.t['2tN7io'], { name: c.name })
                                  }),
                                  (0, l.jsx)(d.Z, {
                                      size: d.Z.Sizes.MEDIUM,
                                      query: h,
                                      selectedSection: 0,
                                      selectedRow: x,
                                      sections: [a.length],
                                      className: b.marginTop4,
                                      onSelect: (e, s) => {
                                          null == s ? Z() : A(s);
                                      },
                                      onSelectionChange: (e, s) => {
                                          var t;
                                          (p(s),
                                              null == (t = f.current) ||
                                                  t.scrollIntoViewRect({
                                                      start: 48 * s,
                                                      end: 48 * s + 48
                                                  }));
                                      },
                                      onQueryChange: P,
                                      placeholder: L.intl.string(L.t.IJExws),
                                      autoFocus: !0,
                                      onClear: Z
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, l.jsx)(i.YAO, {
                      scrollerRef: f,
                      className: 0 === a.length ? k.noResults : k.results,
                      paddingBottom: 12,
                      sections: [a.length],
                      sectionHeight: 0,
                      renderSection: j.VqG,
                      rowHeight: (e, s) => (e > 0 ? 0 : 48 * (null != a[s])),
                      renderRow: (e) => {
                          let { section: s, row: t } = e;
                          if (s > 0) return null;
                          let r = a[t];
                          return null == r
                              ? null
                              : (0, l.jsx)(
                                    I,
                                    {
                                        row: t,
                                        result: r,
                                        sending: null != r.data.record.id && g.includes(r.data.record.id),
                                        selected: t === x,
                                        onMouseEnter: T,
                                        onInvite: A
                                    },
                                    r.data.record.id
                                );
                      },
                      onScroll: (e) => {
                          let s = e.currentTarget.scrollTop > 0;
                          S !== s && E(s);
                      }
                  })
              ]
          });
}
