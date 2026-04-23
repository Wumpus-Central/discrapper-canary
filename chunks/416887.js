n.d(t, { L: () => o });
var i = n(64700),
    l = n(132500),
    r = n(313271);
let a = (0, l.A)(),
    s = new Map(),
    u = new Map();
class o extends i.Component {
    elementId;
    isVisible = !1;
    static defaultProps = {
        active: !0,
        children: i.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 5e-324],
    };
    constructor(e) {
        super(e);
        const { root: t, rootMargin: n, threshold: i } = e;
        t ? (s.has(t) ? (this.elementId = s.get(t) || "") : s.set(t, (0, l.A)())) : (this.elementId = a);
        const o = this.getVisibilityObserverId();
        u.has(o) || u.set(o, new r.j({ root: t, rootMargin: n, threshold: i }));
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
            t = u.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return i.Children.only(this.props.children);
    }
}
