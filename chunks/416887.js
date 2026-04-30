i.d(t, { L: () => o });
var n = i(64700),
    l = i(132500),
    r = i(313271);
let s = (0, l.A)(),
    a = new Map(),
    u = new Map();
class o extends n.Component {
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
        const { root: t, rootMargin: i, threshold: n } = e;
        t ? (a.has(t) ? (this.elementId = a.get(t) || "") : a.set(t, (0, l.A)())) : (this.elementId = s);
        const o = this.getVisibilityObserverId();
        u.has(o) || u.set(o, new r.j({ root: t, rootMargin: i, threshold: n }));
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
            i = t.isVisible(this);
        this.props.active && i !== this.isVisible && this.props.onChange(i),
            !e.active && this.props.active
                ? t.observe(this, this.props.innerRef)
                : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = i);
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
            t = u.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return n.Children.only(this.props.children);
    }
}
