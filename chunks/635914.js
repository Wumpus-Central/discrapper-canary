n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(775121),
    d = n(203982),
    u = n(652215),
    h = n(109803);
let A = () =>
    (0, i.jsxs)(
        "div",
        {
            className: h.HR,
            children: [(0, i.jsx)("div", { className: h.tW }), (0, i.jsx)("img", { alt: "", src: n(24160) })],
        },
        "symbol",
    );
class _ extends l.PureComponent {
    _renderSecondaryTimeout = null;
    _doneTimeout = null;
    state = {
        animating: !1,
        renderSecondary: !1,
        scale: o().random(0.6, 1, !0),
        offsetX: o().random(0, 140, !1) - 70,
        offsetY: o().random(0, 140, !1) - 70,
    };
    componentDidMount() {
        this.setState({ animating: !0 }),
            (this._renderSecondaryTimeout = setTimeout(() => {
                this.setState({ renderSecondary: !0 });
            }, 120)),
            (this._doneTimeout = setTimeout(this.done, 1e3));
    }
    componentDidUpdate(e, t) {
        this.state.renderSecondary && t.renderSecondary;
    }
    componentWillUnmount() {
        clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout);
    }
    done = () => {
        this.props.onAnimationComplete(this.props.componentId);
    };
    renderPrimary() {
        return (0, i.jsxs)(
            "div",
            {
                className: h.e8,
                children: [
                    (0, i.jsx)("img", { alt: "", className: h.Lc, src: n(383922), width: 70, height: 69 }),
                    (0, i.jsx)("img", { alt: "", className: h.QP, src: n(815995), width: 96, height: 95 }),
                    (0, i.jsx)("img", { alt: "", className: h.WB, src: n(32315), width: 183, height: 104 }),
                    (0, i.jsx)("img", { alt: "", className: h.FQ, src: n(144298), width: 69, height: 180 }),
                ],
            },
            "primary-explosion",
        );
    }
    renderSecondary(e, t) {
        return (0, i.jsxs)(
            "div",
            {
                className: h.wv,
                style: { top: t, left: e },
                children: [
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: h.Lc, src: n(61631), width: 61, height: 58 },
                        "circle-inner",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: h.QP, src: n(850166), width: 85, height: 85 },
                        "circle-outer",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: h.WB, src: n(822548), width: 162, height: 173 },
                        "lines-secondary",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: h.FQ, src: n(275242), width: 156, height: 306 },
                        "lines-main",
                    ),
                ],
            },
            "secondary-explosion",
        );
    }
    render() {
        let { renderSecondary: e, offsetX: t, offsetY: n, animating: l, scale: s } = this.state,
            r = [this.renderPrimary()];
        return (
            e && r.push(this.renderSecondary(t, n)),
            (0, i.jsx)("div", {
                className: a()(h.kL, { [h.i0]: l }),
                style: { top: this.props.top, left: this.props.left, transform: `scale(${s})` },
                children: r,
            })
        );
    }
}
class m extends l.PureComponent {
    _timeouts = [];
    children = [];
    state = { explosions: 0, visible: !1 };
    componentDidMount() {
        this.setTimeout(() => {
            this.setState({ visible: !0 }), d._.dispatch(u.jej.SHAKE_APP, { duration: 2400 });
        }, 1800),
            this.setTimeout(this.createExplosion, 1800);
    }
    componentWillUnmount() {
        for (let e of (c.A.enable(), (this.children.length = 0), this._timeouts)) clearTimeout(e);
    }
    setTimeout = (e, t) => {
        let n = setTimeout(e, t);
        return this._timeouts.push(n), n;
    };
    removeExplosion = (e) => {
        let t = this.children,
            n = t.findIndex((t) => {
                if (t.type !== _) return !1;
                let n = t.props;
                return null != n.componentId && n.componentId === e;
            });
        n >= 0 && t.splice(n, 1), this.forceUpdate();
    };
    createExplosion = () => {
        let e = this.children,
            t = (window.innerWidth / 2) | 0,
            n = (window.innerHeight / 2) | 0;
        if (this.state.explosions < 8) {
            let l = `expl-${this.state.explosions}`;
            e.push(
                (0, i.jsx)(
                    _,
                    {
                        componentId: l,
                        top: o().random(n - 100, n + 100, !1),
                        left: o().random(t - 200, t + 200, !1),
                        onAnimationComplete: this.removeExplosion,
                    },
                    l,
                ),
            ),
                this.setTimeout(this.createExplosion, 240),
                this.setState({ explosions: this.state.explosions + 1 });
        } else this.setTimeout(this.addSymbol, 750);
    };
    addSymbol = () => {
        (this.children = [(0, i.jsx)(A, {}, "symbol")]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3);
    };
    delayedClose = () => {
        this.props.handleDemonClose();
    };
    render() {
        return (0, i.jsx)("div", { className: a()(h.QO, { [h.RK]: this.state.visible }), children: this.children });
    }
}
let g = m;
