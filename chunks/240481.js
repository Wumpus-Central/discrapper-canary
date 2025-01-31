n.d(t, { g: () => r });
var i = n(890465);
class r {
    create(e) {
        let t = this.freeTasks,
            n = t.length ? t.pop() : new i.V(this.onError, (e) => (t[t.length] = e));
        return (n.task = e), n;
    }
    constructor(e) {
        (this.onError = e), (this.freeTasks = []);
    }
}
