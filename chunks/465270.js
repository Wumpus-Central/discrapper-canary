r.d(t, { ZN: () => i });
var n = r(639323),
    a = r(588957);
let i = {
    [n.JM]: class {
        constructor(e) {
            this._value = e;
        }
        get weight() {
            return 1;
        }
        add(e) {
            this._value += e;
        }
        toString() {
            return `${this._value}`;
        }
    },
    [n.uG]: class {
        constructor(e) {
            (this._last = e), (this._min = e), (this._max = e), (this._sum = e), (this._count = 1);
        }
        get weight() {
            return 5;
        }
        add(e) {
            (this._last = e),
                e < this._min && (this._min = e),
                e > this._max && (this._max = e),
                (this._sum += e),
                this._count++;
        }
        toString() {
            return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
        }
    },
    [n.g_]: class {
        constructor(e) {
            this._value = [e];
        }
        get weight() {
            return this._value.length;
        }
        add(e) {
            this._value.push(e);
        }
        toString() {
            return this._value.join(":");
        }
    },
    [n.is]: class {
        constructor(e) {
            (this.first = e), (this._value = new Set([e]));
        }
        get weight() {
            return this._value.size;
        }
        add(e) {
            this._value.add(e);
        }
        toString() {
            return Array.from(this._value)
                .map((e) => ("string" == typeof e ? (0, a.M)(e) : e))
                .join(":");
        }
    },
};
