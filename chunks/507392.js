"use strict";
(e.exports = function (e) {
    var t = this.constructor;
    return (
        (this.callbacks = {}),
        (this.directMap = {}),
        (this.sequenceLevels = {}),
        this.resetTimer,
        (this.ignoreNextKeyup = !1),
        (this.ignoreNextKeypress = !1),
        (this.nextExpectedAction = !1),
        (this.element = e),
        this.addEvents(),
        t.instances.push(this),
        this
    );
}),
    (e.exports.prototype.bind = r(983498)),
    (e.exports.prototype.bindMultiple = r(91518)),
    (e.exports.prototype.unbind = r(630061)),
    (e.exports.prototype.trigger = r(993597)),
    (e.exports.prototype.reset = r(385238)),
    (e.exports.prototype.stopCallback = r(549198)),
    (e.exports.prototype.handleKey = r(560096)),
    (e.exports.prototype.addEvents = r(966559)),
    (e.exports.prototype.bindSingle = r(493526)),
    (e.exports.prototype.getKeyInfo = r(932318)),
    (e.exports.prototype.pickBestAction = r(613460)),
    (e.exports.prototype.getReverseMap = r(799689)),
    (e.exports.prototype.getMatches = r(641900)),
    (e.exports.prototype.resetSequences = r(639562)),
    (e.exports.prototype.fireCallback = r(980162)),
    (e.exports.prototype.bindSequence = r(226955)),
    (e.exports.prototype.resetSequenceTimer = r(701482)),
    (e.exports.prototype.detach = r(935534)),
    (e.exports.instances = []),
    (e.exports.reset = r(679327)),
    (e.exports.REVERSE_MAP = null);
