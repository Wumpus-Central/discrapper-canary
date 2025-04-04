n.d(t, { $: () => d }), n(47120), n(411104);
var r,
    i = n(192379),
    o = n(772848),
    a = n(324404);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = (0, o.Z)(),
    c = new Map(),
    u = new Map();
class d extends (r = i.Component) {
    componentDidMount() {
        if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this, this.props.innerRef), (this.isVisible = e.isVisible(this)), this.props.onChange(this.isVisible);
        }
    }
    componentDidUpdate(e) {
        let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
        this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this, this.props.innerRef) : e.active && !this.props.active && t.unobserve(this), (this.isVisible = n);
    }
    componentWillUnmount() {
        this.getVisibilityObserver().unobserve(this);
    }
    getVisibilityObserverId() {
        let { rootMargin: e, threshold: t } = this.props;
        return ''.concat(this.elementId, ' ').concat(e, ' ').concat(t);
    }
    getVisibilityObserver() {
        let e = this.getVisibilityObserverId(),
            t = u.get(e);
        if (!t) throw Error('Visibility sensor with id '.concat(e, ' not found.'));
        return t;
    }
    render() {
        return i.Children.only(this.props.children);
    }
    constructor(e) {
        super(e), s(this, 'elementId', void 0), s(this, 'isVisible', !1);
        let { root: t, rootMargin: n, threshold: r } = e;
        t ? (c.has(t) ? (this.elementId = c.get(t) || '') : c.set(t, (0, o.Z)())) : (this.elementId = l);
        let i = this.getVisibilityObserverId();
        u.has(i) ||
            u.set(
                i,
                new a.Z({
                    root: t,
                    rootMargin: n,
                    threshold: r
                })
            );
    }
}
s(d, 'defaultProps', {
    active: !0,
    children: i.createElement('span'),
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [0, Number.MIN_VALUE]
});
