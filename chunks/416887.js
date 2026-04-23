"use strict";
n.d(t, { L: () => u });
var r = n(64700),
    i = n(835245),
    s = n(313271);
let a = (0, i.A)(),
    o = new Map(),
    l = new Map();
class u extends r.Component {
    elementId;
    isVisible = !1;
    static defaultProps = {
        active: !0,
        children: r.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 5e-324],
    };
    constructor(e) {
        super(e);
        const { root: t, rootMargin: n, threshold: r } = e;
        t ? (o.has(t) ? (this.elementId = o.get(t) || "") : o.set(t, (0, i.A)())) : (this.elementId = a);
        const u = this.getVisibilityObserverId();
        l.has(u) || l.set(u, new s.j({ root: t, rootMargin: n, threshold: r }));
    }
    componentDidMount() {
        if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this, this.props.innerRef),
                (this.isVisible = e.isVisible(this)),
                this.props.onChange(this.isVisible);
        }
    }
    componentDidUpdate(e) {
        let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
        this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
                ? t.observe(this, this.props.innerRef)
                : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
    }
    componentWillUnmount() {
        this.getVisibilityObserver().unobserve(this);
    }
    getVisibilityObserverId() {
        let { rootMargin: e, threshold: t } = this.props;
        return `${this.elementId} ${e} ${t}`;
    }
    getVisibilityObserver() {
        let e = this.getVisibilityObserverId(),
            t = l.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return r.Children.only(this.props.children);
    }
}
