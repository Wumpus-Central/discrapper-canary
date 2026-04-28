i.d(t, { L: () => o });
var l = i(64700),
    s = i(132500),
    n = i(313271);
let r = (0, s.A)(),
    u = new Map(),
    a = new Map();
class o extends l.Component {
    elementId;
    isVisible = !1;
    static defaultProps = {
        active: !0,
        children: l.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 5e-324],
    };
    constructor(e) {
        super(e);
        const { root: t, rootMargin: i, threshold: l } = e;
        t ? (u.has(t) ? (this.elementId = u.get(t) || "") : u.set(t, (0, s.A)())) : (this.elementId = r);
        const o = this.getVisibilityObserverId();
        a.has(o) || a.set(o, new n.j({ root: t, rootMargin: i, threshold: l }));
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
            t = a.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return l.Children.only(this.props.children);
    }
}
