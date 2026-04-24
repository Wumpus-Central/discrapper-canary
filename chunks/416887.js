n.d(t, { L: () => c });
var a = n(64700),
    i = n(132500),
    l = n(313271);
let r = (0, i.A)(),
    o = new Map(),
    s = new Map();
class c extends a.Component {
    elementId;
    isVisible = !1;
    static defaultProps = {
        active: !0,
        children: a.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 5e-324],
    };
    constructor(e) {
        super(e);
        const { root: t, rootMargin: n, threshold: a } = e;
        t ? (o.has(t) ? (this.elementId = o.get(t) || "") : o.set(t, (0, i.A)())) : (this.elementId = r);
        const c = this.getVisibilityObserverId();
        s.has(c) || s.set(c, new l.j({ root: t, rootMargin: n, threshold: a }));
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
            t = s.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return a.Children.only(this.props.children);
    }
}
