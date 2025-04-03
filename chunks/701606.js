var i,
    r,
    n,
    s,
    o,
    d,
    l =
        (this && this.__importDefault) ||
        function (t) {
            return t && t.__esModule ? t : { default: t };
        };
Object.defineProperty(e, '__esModule', { value: !0 }), (e.ICalEventTransparency = e.ICalEventBusyStatus = e.ICalEventStatus = void 0);
let u = l(a(659738)),
    h = a(26507),
    c = l(a(293808)),
    p = l(a(914486)),
    f = l(a(337951)),
    m = a(574276);
((i = s = e.ICalEventStatus || (e.ICalEventStatus = {})).CONFIRMED = 'CONFIRMED'),
    (i.TENTATIVE = 'TENTATIVE'),
    (i.CANCELLED = 'CANCELLED'),
    ((r = o = e.ICalEventBusyStatus || (e.ICalEventBusyStatus = {})).FREE = 'FREE'),
    (r.TENTATIVE = 'TENTATIVE'),
    (r.BUSY = 'BUSY'),
    (r.OOF = 'OOF'),
    ((n = d = e.ICalEventTransparency || (e.ICalEventTransparency = {})).TRANSPARENT = 'TRANSPARENT'),
    (n.OPAQUE = 'OPAQUE'),
    (e.default = class {
        constructor(t, e) {
            if (
                ((this.data = {
                    id: (0, u.default)(),
                    sequence: 0,
                    start: null,
                    end: null,
                    recurrenceId: null,
                    timezone: null,
                    stamp: new Date(),
                    allDay: !1,
                    floating: !1,
                    repeating: null,
                    summary: '',
                    location: null,
                    description: null,
                    organizer: null,
                    attendees: [],
                    alarms: [],
                    categories: [],
                    status: null,
                    busystatus: null,
                    priority: null,
                    url: null,
                    transparency: null,
                    created: null,
                    lastModified: null,
                    x: []
                }),
                (this.calendar = e),
                !e)
            )
                throw Error('`calendar` option required!');
            t.id && this.id(t.id), void 0 !== t.sequence && this.sequence(t.sequence), t.start && this.start(t.start), void 0 !== t.end && this.end(t.end), void 0 !== t.recurrenceId && this.recurrenceId(t.recurrenceId), void 0 !== t.timezone && this.timezone(t.timezone), void 0 !== t.stamp && this.stamp(t.stamp), void 0 !== t.allDay && this.allDay(t.allDay), void 0 !== t.floating && this.floating(t.floating), void 0 !== t.repeating && this.repeating(t.repeating), void 0 !== t.summary && this.summary(t.summary), void 0 !== t.location && this.location(t.location), void 0 !== t.description && this.description(t.description), void 0 !== t.organizer && this.organizer(t.organizer), void 0 !== t.attendees && this.attendees(t.attendees), void 0 !== t.alarms && this.alarms(t.alarms), void 0 !== t.categories && this.categories(t.categories), void 0 !== t.status && this.status(t.status), void 0 !== t.busystatus && this.busystatus(t.busystatus), void 0 !== t.priority && this.priority(t.priority), void 0 !== t.url && this.url(t.url), void 0 !== t.transparency && this.transparency(t.transparency), void 0 !== t.created && this.created(t.created), void 0 !== t.lastModified && this.lastModified(t.lastModified), void 0 !== t.x && this.x(t.x);
        }
        id(t) {
            return void 0 === t ? this.data.id : ((this.data.id = String(t)), this);
        }
        uid(t) {
            return void 0 === t ? this.id() : this.id(t);
        }
        sequence(t) {
            if (void 0 === t) return this.data.sequence;
            if (isNaN(parseInt(String(t), 10))) throw Error('`sequence` must be a number!');
            return (this.data.sequence = t), this;
        }
        start(t) {
            if (void 0 === t) return this.data.start;
            if (((this.data.start = (0, h.checkDate)(t, 'start')), this.data.start && this.data.end && (0, h.toDate)(this.data.start).getTime() > (0, h.toDate)(this.data.end).getTime())) {
                let t = this.data.start;
                (this.data.start = this.data.end), (this.data.end = t);
            }
            return this;
        }
        end(t) {
            if (void 0 === t) return this.data.end;
            if (null === t) return (this.data.end = null), this;
            if (((this.data.end = (0, h.checkDate)(t, 'end')), this.data.start && this.data.end && (0, h.toDate)(this.data.start).getTime() > (0, h.toDate)(this.data.end).getTime())) {
                let t = this.data.start;
                (this.data.start = this.data.end), (this.data.end = t);
            }
            return this;
        }
        recurrenceId(t) {
            return void 0 === t ? this.data.recurrenceId : (null === t ? (this.data.recurrenceId = null) : (this.data.recurrenceId = (0, h.checkDate)(t, 'recurrenceId')), this);
        }
        timezone(t) {
            return void 0 === t && null !== this.data.timezone ? this.data.timezone : void 0 === t ? this.calendar.timezone() : ((this.data.timezone = t ? t.toString() : null), this.data.timezone && (this.data.floating = !1), this);
        }
        stamp(t) {
            return void 0 === t ? this.data.stamp : ((this.data.stamp = (0, h.checkDate)(t, 'stamp')), this);
        }
        timestamp(t) {
            return void 0 === t ? this.stamp() : this.stamp(t);
        }
        allDay(t) {
            return void 0 === t ? this.data.allDay : ((this.data.allDay = !!t), this);
        }
        floating(t) {
            return void 0 === t ? this.data.floating : ((this.data.floating = !!t), this.data.floating && (this.data.timezone = null), this);
        }
        repeating(t) {
            if (void 0 === t) return this.data.repeating;
            if (!t) return (this.data.repeating = null), this;
            if ((0, h.isRRule)(t) || 'string' == typeof t) return (this.data.repeating = t), this;
            if (((this.data.repeating = { freq: (0, h.checkEnum)(m.ICalEventRepeatingFreq, t.freq) }), t.count)) {
                if (!isFinite(t.count)) throw Error('`repeating.count` must be a finite number!');
                this.data.repeating.count = t.count;
            }
            if (t.interval) {
                if (!isFinite(t.interval)) throw Error('`repeating.interval` must be a finite number!');
                this.data.repeating.interval = t.interval;
            }
            if ((void 0 !== t.until && (this.data.repeating.until = (0, h.checkDate)(t.until, 'repeating.until')), t.byDay)) {
                let e = Array.isArray(t.byDay) ? t.byDay : [t.byDay];
                this.data.repeating.byDay = e.map((t) => (0, h.checkEnum)(m.ICalWeekday, t));
            }
            if (t.byMonth) {
                let e = Array.isArray(t.byMonth) ? t.byMonth : [t.byMonth];
                this.data.repeating.byMonth = e.map((t) => {
                    if ('number' != typeof t || t < 1 || t > 12) throw Error('`repeating.byMonth` contains invalid value `' + t + '`!');
                    return t;
                });
            }
            if (t.byMonthDay) {
                let e = Array.isArray(t.byMonthDay) ? t.byMonthDay : [t.byMonthDay];
                this.data.repeating.byMonthDay = e.map((t) => {
                    if ('number' != typeof t || t < 1 || t > 31) throw Error('`repeating.byMonthDay` contains invalid value `' + t + '`!');
                    return t;
                });
            }
            if (t.bySetPos) {
                if (!this.data.repeating.byDay) throw '`repeating.bySetPos` must be used along with `repeating.byDay`!';
                if ('number' != typeof t.bySetPos || t.bySetPos < -1 || t.bySetPos > 4) throw '`repeating.bySetPos` contains invalid value `' + t.bySetPos + '`!';
                this.data.repeating.byDay.splice(1), (this.data.repeating.bySetPos = t.bySetPos);
            }
            if (t.exclude) {
                let e = Array.isArray(t.exclude) ? t.exclude : [t.exclude];
                this.data.repeating.exclude = e.map((t, e) => (0, h.checkDate)(t, `repeating.exclude[${e}]`));
            }
            return t.startOfWeek && (this.data.repeating.startOfWeek = (0, h.checkEnum)(m.ICalWeekday, t.startOfWeek)), this;
        }
        summary(t) {
            return void 0 === t ? this.data.summary : ((this.data.summary = t ? String(t) : ''), this);
        }
        location(t) {
            if (void 0 === t) return this.data.location;
            if ('string' == typeof t) return (this.data.location = { title: t }), this;
            if ((t && !t.title) || ((null == t ? void 0 : t.geo) && (!isFinite(t.geo.lat) || !isFinite(t.geo.lon)))) throw Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalevent.html#location");
            return (this.data.location = t || null), this;
        }
        description(t) {
            return void 0 === t ? this.data.description : (null === t ? (this.data.description = null) : 'string' == typeof t ? (this.data.description = { plain: t }) : (this.data.description = t), this);
        }
        organizer(t) {
            return void 0 === t ? this.data.organizer : (null === t ? (this.data.organizer = null) : (this.data.organizer = (0, h.checkNameAndMail)('organizer', t)), this);
        }
        createAttendee(t = {}) {
            if (t instanceof c.default) return this.data.attendees.push(t), t;
            'string' == typeof t && (t = (0, h.checkNameAndMail)('data', t));
            let e = new c.default(t, this);
            return this.data.attendees.push(e), e;
        }
        attendees(t) {
            return t ? (t.forEach((t) => this.createAttendee(t)), this) : this.data.attendees;
        }
        createAlarm(t = {}) {
            let e = t instanceof p.default ? t : new p.default(t, this);
            return this.data.alarms.push(e), e;
        }
        alarms(t) {
            return t ? (t.forEach((t) => this.createAlarm(t)), this) : this.data.alarms;
        }
        createCategory(t = {}) {
            let e = t instanceof f.default ? t : new f.default(t);
            return this.data.categories.push(e), e;
        }
        categories(t) {
            return t ? (t.forEach((t) => this.createCategory(t)), this) : this.data.categories;
        }
        status(t) {
            return void 0 === t ? this.data.status : (null === t ? (this.data.status = null) : (this.data.status = (0, h.checkEnum)(s, t)), this);
        }
        busystatus(t) {
            return void 0 === t ? this.data.busystatus : (null === t ? (this.data.busystatus = null) : (this.data.busystatus = (0, h.checkEnum)(o, t)), this);
        }
        priority(t) {
            if (void 0 === t) return this.data.priority;
            if (null === t) return (this.data.priority = null), this;
            if (t < 0 || t > 9) throw Error('`priority` is invalid, musst be 0 \u2264 priority \u2264 9.');
            return (this.data.priority = Math.round(t)), this;
        }
        url(t) {
            return void 0 === t ? this.data.url : ((this.data.url = t ? String(t) : null), this);
        }
        transparency(t) {
            return void 0 === t ? this.data.transparency : (t ? (this.data.transparency = (0, h.checkEnum)(d, t)) : (this.data.transparency = null), this);
        }
        created(t) {
            return void 0 === t ? this.data.created : (null === t ? (this.data.created = null) : (this.data.created = (0, h.checkDate)(t, 'created')), this);
        }
        lastModified(t) {
            return void 0 === t ? this.data.lastModified : (null === t ? (this.data.lastModified = null) : (this.data.lastModified = (0, h.checkDate)(t, 'lastModified')), this);
        }
        x(t, e) {
            return void 0 === t ? (0, h.addOrGetCustomAttributes)(this.data) : ('string' == typeof t && 'string' == typeof e && (0, h.addOrGetCustomAttributes)(this.data, t, e), 'object' == typeof t && (0, h.addOrGetCustomAttributes)(this.data, t), this);
        }
        toJSON() {
            var t;
            let e = null;
            return (
                (0, h.isRRule)(this.data.repeating) || 'string' == typeof this.data.repeating
                    ? (e = this.data.repeating.toString())
                    : this.data.repeating &&
                      (e = Object.assign({}, this.data.repeating, {
                          until: (0, h.toJSON)(this.data.repeating.until),
                          exclude: null == (t = this.data.repeating.exclude) ? void 0 : t.map((t) => (0, h.toJSON)(t))
                      })),
                Object.assign({}, this.data, {
                    start: (0, h.toJSON)(this.data.start) || null,
                    end: (0, h.toJSON)(this.data.end) || null,
                    recurrenceId: (0, h.toJSON)(this.data.recurrenceId) || null,
                    stamp: (0, h.toJSON)(this.data.stamp) || null,
                    created: (0, h.toJSON)(this.data.created) || null,
                    lastModified: (0, h.toJSON)(this.data.lastModified) || null,
                    repeating: e,
                    x: this.x()
                })
            );
        }
        toString() {
            var t, e, a, i, r;
            let n = '';
            if (!this.data.start) throw Error('No value for `start` in ICalEvent #' + this.data.id + ' given!');
            return (
                (n += 'BEGIN:VEVENT\r\n'),
                (n += 'UID:' + this.data.id + '\r\n'),
                (n += 'SEQUENCE:' + this.data.sequence + '\r\n'),
                (n += 'DTSTAMP:' + (0, h.formatDate)(this.calendar.timezone(), this.data.stamp) + '\r\n'),
                this.data.allDay ? ((n += 'DTSTART;VALUE=DATE:' + (0, h.formatDate)(this.calendar.timezone(), this.data.start, !0) + '\r\n'), this.data.end && (n += 'DTEND;VALUE=DATE:' + (0, h.formatDate)(this.calendar.timezone(), this.data.end, !0) + '\r\n'), (n += 'X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r\n'), (n += 'X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r\n')) : ((n += (0, h.formatDateTZ)(this.timezone(), 'DTSTART', this.data.start, this.data) + '\r\n'), this.data.end && (n += (0, h.formatDateTZ)(this.timezone(), 'DTEND', this.data.end, this.data) + '\r\n')),
                (0, h.isRRule)(this.data.repeating) || 'string' == typeof this.data.repeating
                    ? (n +=
                          this.data.repeating
                              .toString()
                              .replace(/\r\n/g, '\n')
                              .split('\n')
                              .filter((t) => t && !t.startsWith('DTSTART:'))
                              .join('\r\n') + '\r\n')
                    : this.data.repeating && ((n += 'RRULE:FREQ=' + this.data.repeating.freq), this.data.repeating.count && (n += ';COUNT=' + this.data.repeating.count), this.data.repeating.interval && (n += ';INTERVAL=' + this.data.repeating.interval), this.data.repeating.until && (n += ';UNTIL=' + (0, h.formatDate)(this.calendar.timezone(), this.data.repeating.until)), this.data.repeating.byDay && (n += ';BYDAY=' + this.data.repeating.byDay.join(',')), this.data.repeating.byMonth && (n += ';BYMONTH=' + this.data.repeating.byMonth.join(',')), this.data.repeating.byMonthDay && (n += ';BYMONTHDAY=' + this.data.repeating.byMonthDay.join(',')), this.data.repeating.bySetPos && (n += ';BYSETPOS=' + this.data.repeating.bySetPos), this.data.repeating.startOfWeek && (n += ';WKST=' + this.data.repeating.startOfWeek), (n += '\r\n'), this.data.repeating.exclude && (this.data.allDay ? (n += 'EXDATE;VALUE=DATE:' + this.data.repeating.exclude.map((t) => (0, h.formatDate)(this.calendar.timezone(), t, !0)).join(',') + '\r\n') : ((n += 'EXDATE'), this.timezone() ? (n += ';TZID=' + this.timezone() + ':' + this.data.repeating.exclude.map((t) => (0, h.formatDate)(this.timezone(), t, !1, !0)).join(',') + '\r\n') : (n += ':' + this.data.repeating.exclude.map((t) => (0, h.formatDate)(this.timezone(), t)).join(',') + '\r\n')))),
                this.data.recurrenceId && (n += (0, h.formatDateTZ)(this.timezone(), 'RECURRENCE-ID', this.data.recurrenceId, this.data) + '\r\n'),
                (n += 'SUMMARY:' + (0, h.escape)(this.data.summary) + '\r\n'),
                this.data.transparency && (n += 'TRANSP:' + (0, h.escape)(this.data.transparency) + '\r\n'),
                (null == (t = this.data.location) ? void 0 : t.title) && ((n += 'LOCATION:' + (0, h.escape)(this.data.location.title + (this.data.location.address ? '\n' + this.data.location.address : '')) + '\r\n'), this.data.location.radius && this.data.location.geo && (n += 'X-APPLE-STRUCTURED-LOCATION;VALUE=URI;' + (this.data.location.address ? 'X-ADDRESS=' + (0, h.escape)(this.data.location.address) + ';' : '') + 'X-APPLE-RADIUS=' + (0, h.escape)(this.data.location.radius) + ';X-TITLE=' + (0, h.escape)(this.data.location.title) + ':geo:' + (0, h.escape)(null == (e = this.data.location.geo) ? void 0 : e.lat) + ',' + (0, h.escape)(null == (a = this.data.location.geo) ? void 0 : a.lon) + '\r\n'), this.data.location.geo && (n += 'GEO:' + (0, h.escape)(null == (i = this.data.location.geo) ? void 0 : i.lat) + ';' + (0, h.escape)(null == (r = this.data.location.geo) ? void 0 : r.lon) + '\r\n')),
                this.data.description && ((n += 'DESCRIPTION:' + (0, h.escape)(this.data.description.plain) + '\r\n'), this.data.description.html && (n += 'X-ALT-DESC;FMTTYPE=text/html:' + (0, h.escape)(this.data.description.html) + '\r\n')),
                this.data.organizer && ((n += 'ORGANIZER;CN="' + (0, h.escape)(this.data.organizer.name) + '"'), this.data.organizer.email && this.data.organizer.mailto && (n += ';EMAIL=' + (0, h.escape)(this.data.organizer.email)), this.data.organizer.email && (n += ':mailto:' + (0, h.escape)(this.data.organizer.mailto || this.data.organizer.email)), (n += '\r\n')),
                this.data.attendees.forEach(function (t) {
                    n += t.toString();
                }),
                this.data.alarms.forEach(function (t) {
                    n += t.toString();
                }),
                this.data.categories.length > 0 &&
                    (n +=
                        'CATEGORIES:' +
                        this.data.categories
                            .map(function (t) {
                                return t.toString();
                            })
                            .join() +
                        '\r\n'),
                this.data.url && (n += 'URL;VALUE=URI:' + (0, h.escape)(this.data.url) + '\r\n'),
                this.data.status && (n += 'STATUS:' + this.data.status.toUpperCase() + '\r\n'),
                this.data.busystatus && (n += 'X-MICROSOFT-CDO-BUSYSTATUS:' + this.data.busystatus.toUpperCase() + '\r\n'),
                null !== this.data.priority && (n += 'PRIORITY:' + this.data.priority + '\r\n'),
                (n += (0, h.generateCustomAttributes)(this.data)),
                this.data.created && (n += 'CREATED:' + (0, h.formatDate)(this.calendar.timezone(), this.data.created) + '\r\n'),
                this.data.lastModified && (n += 'LAST-MODIFIED:' + (0, h.formatDate)(this.calendar.timezone(), this.data.lastModified) + '\r\n'),
                (n += 'END:VEVENT\r\n')
            );
        }
    });
