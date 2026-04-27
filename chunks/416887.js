"use strict";
r.d(t, { L: () => c });
var n = r(64700),
    i = r(132500),
    a = r(313271);
let s = (0, i.A)(),
    l = new Map(),
    o = new Map();
class c extends n.Component {
    elementId;
    isVisible = !1;
    static defaultProps = {
        active: !0,
        children: n.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 5e-324],
    };
    constructor(e) {
        super(e);
        const { root: t, rootMargin: r, threshold: n } = e;
        t ? (l.has(t) ? (this.elementId = l.get(t) || "") : l.set(t, (0, i.A)())) : (this.elementId = s);
        const c = this.getVisibilityObserverId();
        o.has(c) || o.set(c, new a.j({ root: t, rootMargin: r, threshold: n }));
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
            r = t.isVisible(this);
        this.props.active && r !== this.isVisible && this.props.onChange(r),
            !e.active && this.props.active
                ? t.observe(this, this.props.innerRef)
                : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = r);
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
            t = o.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return n.Children.only(this.props.children);
    }
}
