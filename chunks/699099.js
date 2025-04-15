l.d(s, { default: () => A }), l(388685);
var t = l(200651),
    r = l(192379),
    a = l(120356),
    n = l.n(a),
    u = l(442837),
    c = l(481060),
    i = l(24124),
    o = l(461745),
    d = l(212819),
    h = l(43267),
    m = l(447003),
    _ = l(933557),
    x = l(606206),
    N = l(592125),
    p = l(944486),
    g = l(585483),
    k = l(5192),
    C = l(51144),
    v = l(981631),
    S = l(388032),
    E = l(944801),
    j = l(20493);
function L(e, s, l) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = l),
        e
    );
}
let b = (e) => {
        let { channel: s, categoryName: l, guildName: r } = e,
            a = c.VL1;
        return (
            (0, m.Z)(s) ? (a = c.W4G) : s.isNSFW() && (a = c.z0B),
            (0, t.jsxs)('div', {
                className: E.result,
                children: [
                    (0, t.jsx)(a, {
                        className: E.resultIcon,
                        colorClass: E.resultIconBackground,
                        size: 'xs'
                    }),
                    (0, t.jsxs)('div', {
                        className: E.resultText,
                        children: [
                            (0, t.jsx)('span', { children: s.name }),
                            (0, t.jsx)('span', {
                                className: E.resultCategoryName,
                                children: l
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: E.resultGuildName,
                        children: r
                    })
                ]
            })
        );
    },
    f = (e) => {
        let { channel: s } = e,
            l = (0, _.ZP)(s);
        return (0, t.jsxs)('div', {
            className: E.result,
            children: [
                (0, t.jsx)(c.qEK, {
                    src: (0, h.x)(s),
                    'aria-label': null != l ? l : '',
                    className: E.resultAvatar,
                    size: c.EFr.SIZE_32
                }),
                (0, t.jsx)('div', {
                    className: E.resultText,
                    children: l
                })
            ]
        });
    },
    R = (e) => {
        let { user: s, status: l } = e,
            r = (0, u.e7)([p.Z, N.Z], () => {
                var e;
                let s = null != (e = p.Z.getVoiceChannelId()) ? e : p.Z.getChannelId();
                return null == s ? null : N.Z.getChannel(s);
            }),
            a = null == r ? void 0 : r.guild_id,
            n = null == r ? void 0 : r.id,
            i = k.ZP.useName(a, n, s),
            o = C.ZP.useName(s);
        return (0, t.jsxs)('div', {
            className: E.result,
            children: [
                (0, t.jsx)(c.qEK, {
                    src: s.getAvatarURL(void 0, 32),
                    'aria-label': s.username,
                    className: E.resultAvatar,
                    size: c.EFr.SIZE_32,
                    status: l
                }),
                (0, t.jsxs)('div', {
                    className: E.resultText,
                    children: [
                        (0, t.jsx)('span', { children: i }),
                        (0, t.jsx)('span', {
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
            { result: l, selected: r, sending: a } = this.props;
        switch (l.type) {
            case d.h8.GROUP_DM:
                e = (0, t.jsx)(f, { channel: l.data.record });
                break;
            case d.h8.TEXT_CHANNEL: {
                let { categoryName: s, guildName: r } = l;
                e = (0, t.jsx)(b, {
                    channel: l.data.record,
                    categoryName: s,
                    guildName: r
                });
                break;
            }
            case d.h8.USER: {
                let {
                    data: { comparator: s, record: r },
                    status: a
                } = l;
                e = (0, t.jsx)(R, {
                    comparator: s,
                    user: r,
                    status: a
                });
            }
        }
        return (
            (s = l.sent
                ? (0, t.jsx)(c.zxk, {
                      className: E.inviteButton,
                      look: c.zxk.Looks.LINK,
                      size: c.zxk.Sizes.SMALL,
                      disabled: !0,
                      color: c.zxk.Colors.WHITE,
                      children: S.NW.string(S.t.i6A1X1)
                  })
                : (0, t.jsx)(c.zxk, {
                      color: c.zxk.Colors.GREEN,
                      look: r ? c.zxk.Looks.FILLED : c.zxk.Looks.OUTLINED,
                      className: E.inviteButton,
                      size: c.zxk.Sizes.SMALL,
                      submitting: a,
                      onClick: this.handleClick,
                      children: S.NW.string(S.t['6F9ivr'])
                  })),
            (0, t.jsxs)(c.P3F, {
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
    let { transitionState: s, onClose: l } = e,
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
        [N, p] = r.useState(0),
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
            null == h && l();
        }, [l, h]),
        r.useEffect(() => {
            var e;
            null == (e = f.current) || e.scrollToTop(), p(0);
        }, [f, a]);
    let I = r.useCallback(
            (e) => {
                let {
                    data: s,
                    data: {
                        record: { id: l }
                    }
                } = a[e];
                if (!(null == l || k.includes(l)))
                    switch ((C([...k, l]), s.type)) {
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
                p(e);
            },
            [p]
        ),
        T = () => {
            Z('');
        },
        Z = (e) => {
            _(e), (0, i.rh)(e);
        };
    return null == h
        ? null
        : (0, t.jsxs)(c.Y0X, {
              transitionState: s,
              size: c.CgR.SMALL,
              'aria-label': S.NW.formatToPlainString(S.t['2tN7io'], { name: h.name }),
              children: [
                  (0, t.jsxs)(c.xBx, {
                      separator: L,
                      className: E.modalHeader,
                      children: [
                          (0, t.jsx)(c.olH, {
                              className: E.closeButton,
                              onClick: l
                          }),
                          (0, t.jsxs)('div', {
                              className: E.header,
                              children: [
                                  (0, t.jsx)(c.vwX, {
                                      tag: 'h2',
                                      className: j.marginBottom8,
                                      children: S.NW.format(S.t['2tN7io'], { name: h.name })
                                  }),
                                  (0, t.jsx)(o.ZP, {
                                      size: o.ZP.Sizes.MEDIUM,
                                      query: m,
                                      selectedSection: 0,
                                      selectedRow: N,
                                      sections: [a.length],
                                      className: j.marginTop4,
                                      onSelect: (e, s) => {
                                          null == s ? T() : I(s);
                                      },
                                      onSelectionChange: (e, s) => {
                                          var l;
                                          p(s),
                                              null == (l = f.current) ||
                                                  l.scrollIntoViewRect({
                                                      start: 48 * s,
                                                      end: 48 * s + 48
                                                  });
                                      },
                                      onQueryChange: Z,
                                      placeholder: S.NW.string(S.t.IJExws),
                                      autoFocus: !0,
                                      onClear: T
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, t.jsx)(c.YAO, {
                      scrollerRef: f,
                      className: 0 === a.length ? E.noResults : E.results,
                      paddingBottom: 12,
                      sections: [a.length],
                      sectionHeight: 0,
                      renderSection: v.VqG,
                      rowHeight: (e, s) => (e > 0 ? 0 : 48 * (null != a[s])),
                      renderRow: (e) => {
                          let { section: s, row: l } = e;
                          if (s > 0) return null;
                          let r = a[l];
                          return null == r
                              ? null
                              : (0, t.jsx)(
                                    z,
                                    {
                                        row: l,
                                        result: r,
                                        sending: null != r.data.record.id && k.includes(r.data.record.id),
                                        selected: l === N,
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
