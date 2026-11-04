var i = n(575593),
    r = n(338535);
class a extends r.A {
    constructor(e) {
        (super(e), (this.type = i.R.NONE));
    }
    static fromServer(e) {
        return new a({ ...super.fromServer(e), type: i.R.NONE });
    }
}
n.d(
    t,
    {},
    {
        A: a,
        g: function (e) {
            return e instanceof a;
        },
    },
);
