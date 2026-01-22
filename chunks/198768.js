n.d(t, { L: () => r });
class r extends Set {
    constructor(e, t, n) {
        super(e),
            e instanceof r
                ? ((this.anchorKey = null != t ? t : e.anchorKey), (this.currentKey = null != n ? n : e.currentKey))
                : ((this.anchorKey = null != t ? t : null), (this.currentKey = null != n ? n : null));
    }
}
