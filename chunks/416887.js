a.d(t, { L: () => c });
var n = a(64700),
    r = a(132500),
    l = a(313271);
let i = (0, r.A)(),
    s = new Map(),
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
        const { root: t, rootMargin: a, threshold: n } = e;
        t ? (s.has(t) ? (this.elementId = s.get(t) || "") : s.set(t, (0, r.A)())) : (this.elementId = i);
        const c = this.getVisibilityObserverId();
        o.has(c) || o.set(c, new l.j({ root: t, rootMargin: a, threshold: n }));
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
            a = t.isVisible(this);
        this.props.active && a !== this.isVisible && this.props.onChange(a),
            !e.active && this.props.active
                ? t.observe(this, this.props.innerRef)
                : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = a);
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
