r.d(n, {
    F: function () {
        return m;
    },
    n: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(91192),
    c = r(924826),
    d = r(481060),
    f = r(600164),
    _ = r(313201),
    h = r(325720);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class m extends s.PureComponent {
    render() {
        let { label: e, value: n, renderValue: r, className: i } = this.props;
        return (0, a.jsxs)(f.Z, {
            className: l()(h.quickSelect, i),
            align: f.Z.Align.CENTER,
            children: [
                (0, a.jsx)('div', {
                    className: h.quickSelectLabel,
                    children: e
                }),
                (0, a.jsxs)(f.Z, {
                    align: f.Z.Align.CENTER,
                    className: h.quickSelectClick,
                    children: [
                        (0, a.jsx)('div', {
                            className: h.quickSelectValue,
                            children: null != r ? r(n) : n.label
                        }),
                        (0, a.jsx)('div', { className: h.quickSelectArrow })
                    ]
                })
            ]
        });
    }
}
class g extends s.PureComponent {
    render() {
        let { selected: e, renderOption: n, option: r } = this.props;
        return (0, a.jsx)(u.mh, {
            id: r.key,
            children: (i) =>
                (0, a.jsx)(d.Clickable, {
                    focusProps: { enabled: !1 },
                    className: l()(h.quickSelectPopoutOption, { selected: e }),
                    onClick: this.handleClick,
                    ...i,
                    role: 'option',
                    children: n(r, e)
                })
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleClick', () => {
                let { option: e, onChange: n } = this.props;
                null == n || n(e);
            });
    }
}
function E(e) {
    let { options: n, value: r, scroller: i, renderOption: s, onChange: o, className: f } = e,
        p = l()(h.quickSelectPopout, f, { [h.quickSelectPopoutScroll]: i }),
        m = n.map((e) => {
            let n = null != r && e.value === r.value,
                i = n ? void 0 : o;
            return (0, a.jsx)(
                g,
                {
                    className: h.quickSelectPopoutOption,
                    renderOption: s,
                    option: e,
                    onChange: i,
                    selected: n
                },
                e.key || e.value
            );
        }),
        E = (0, _.Dt)(),
        v = (0, c.ZP)({
            id: E,
            isEnabled: !0,
            wrap: !0,
            async scrollToStart() {},
            async scrollToEnd() {}
        }),
        { ref: I, ...T } = v.containerProps;
    return (
        (0, d.useFocusLock)(I),
        (0, a.jsx)(u.bG, {
            navigator: v,
            children: (0, a.jsx)('div', {
                ref: I,
                className: p,
                ...T,
                role: 'listbox',
                children: i
                    ? (0, a.jsx)(d.Scroller, {
                          className: h.quickSelectScroller,
                          children: m
                      })
                    : m
            })
        })
    );
}
class v extends s.PureComponent {
    render() {
        let { label: e, value: n, renderValue: r, className: i, popoutProps: s } = this.props;
        return (0, a.jsx)(d.Popout, {
            ...s,
            renderPopout: this.renderPopout,
            children: (s, o) => {
                let { isShown: l } = o;
                return (0, a.jsx)(d.Clickable, {
                    ...s,
                    className: i,
                    'aria-haspopup': 'listbox',
                    'aria-expanded': l,
                    children: (0, a.jsx)(m, {
                        label: e,
                        value: n,
                        renderValue: r
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'renderPopout', (e) => {
                let { closePopout: n } = e,
                    { options: r, value: i, renderOption: s, popoutClassName: o, scroller: l } = this.props;
                return (0, a.jsx)(E, {
                    scroller: !!l,
                    className: o,
                    options: r,
                    value: i,
                    renderOption: s,
                    onChange: (e) => {
                        this.handleChange(e), n();
                    }
                });
            }),
            p(this, 'handleChange', (e) => {
                let { onChange: n } = this.props;
                null == n || n(e);
            });
    }
}
