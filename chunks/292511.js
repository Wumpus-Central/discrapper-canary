var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 });
let a = n(r(92784));
class i extends a.default {
    patternBetween() {
        return RegExp("^\\s*(T|\u0432|\u0443|\u043E|,|-)?\\s*$");
    }
}
t.default = i;
